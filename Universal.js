




//github pull and push

const GITHUB_TOKEN="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"
 async function pullProgress(Name,Day,Puzzle) {
 
    
    const url = `https://api.github.com/repos/Wells-Wait/EscapeTheRoom/contents/${Name}/${Name}.ESCAPE`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            // This is the "ID/Key" that lets you in
            "Authorization": `Bearer ${GITHUB_TOKEN}`, 
            "Accept": "application/vnd.github.v3+json"
        }
    });

    const data = await response.json();
    if (!data.content) {
    return 0, 0, 0;
}
    const actualText = atob(data.content);
    const gameData = actualText.trim().split('\n').map(line => {
    return line.split(','); 
});
    
    return [gameData[Day][Puzzle], data.sha, gameData]; 
}

async function updateProgress(Name,Day,Puzzle, newValue){
    const url = `https://api.github.com/repos/Wells-Wait/EscapeTheRoom/contents/${Name}/${Name}.ESCAPE`;
    const [current, sha, gameData] = await pullProgress(Name, Day, Puzzle)

    gameData[Day][Puzzle] = newValue;
    const updatedString = gameData.map(row => row.join(',')).join('\n');

    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${GITHUB_TOKEN}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: `Updated Day ${Day} Puzzle ${Puzzle} of ${Name}`,
            content: btoa(updatedString), // Convert string to Base64
            sha: sha // The "Permission Slip" that matches the version you pulled
        })
    });


}


//clock
const endDate = 18
function addClockFormating(){
    RunClock()
    const clock = document.getElementById('Clock');
    clock.style.color = "blue";
    clock.style.borderBlockStyle = "double";
    clock.style.borderColor = "blue";
    clock.style.borderRadius = "10%";
    clock.style.textAlign = "center";
}
function RunClock(){
    
    const clock = document.getElementById('Clock');
    const now = new Date();
    clock.innerHTML= String(endDate - now.getDate()) + ":" + (24 - now.getHours()).toString().padStart(2, '0') + ":" + (60 - now.getMinutes()).toString().padStart(2, '0') + ":" +  (60 - now.getSeconds()).toString().padStart(2, '0');
    if (endDate - now.getDate()>=6){
        clock.innerHTML= "Starts in: "+String(endDate-6 - now.getDate()) + ":" + (24 - now.getHours()).toString().padStart(2, '0') + ":" + (60 - now.getMinutes()).toString().padStart(2, '0') + ":" +  (60 - now.getSeconds()).toString().padStart(2, '0');

    }


}
function GetTimeLeft(){
    
    const now = new Date();
    
    if (endDate - now.getDate()>=6){
        return [7,0,0,0];

    }
return [endDate - now.getDate(),24 - now.getHours(),60 - now.getMinutes(),60 - now.getSeconds()];

}


addClockFormating()
setInterval(RunClock, 1000);


//navigation bar
function addNavBarFormating(){
const navBar = document.getElementById('navBar');
const days =[document.getElementById('Day1NavBar'),document.getElementById('Day2NavBar'),document.getElementById('Day3NavBar'),
    document.getElementById('Day4NavBar'),document.getElementById('Day5NavBar'),
    document.getElementById('Day6NavBar')];
navBar.style.color = "black";
    navBar.style.borderBlockStyle = "double";
    navBar.style.borderColor = "blue";
    navBar.style.borderRadius = "10%";
   navBar.style.textAlign = "center";
   const [day, hour, minute, second]=GetTimeLeft()

   for (let i =0; i<6; i++){
    days[i].style.padding = "1%";
    if ((5-i)<day){
        days[i].style.display = "none";

    }
   }


}
addNavBarFormating()