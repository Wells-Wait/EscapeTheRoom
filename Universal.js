




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
    const endDate = 26
    const clock = document.getElementById('Clock');
    const now = new Date();
    clock.innerHTML= String(endDate - now.getDate()) + ":" + (24 - now.getHours()).toString().padStart(2, '0') + ":" + (60 - now.getMinutes()).toString().padStart(2, '0') + ":" +  (60 - now.getSeconds()).toString().padStart(2, '0');
    if (endDate - now.getDate()>=7){
        clock.innerHTML= "Starts in: "+String(endDate-7 - now.getDate()) + ":" + (24 - now.getHours()).toString().padStart(2, '0') + ":" + (60 - now.getMinutes()).toString().padStart(2, '0') + ":" +  (60 - now.getSeconds()).toString().padStart(2, '0');

    }


}


addClockFormating()
setInterval(RunClock, 1000);
