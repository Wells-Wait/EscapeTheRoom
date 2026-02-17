window.addEventListener('keydown', (event) => {
    // Only works if the user presses 's' for "Save"
    if (event.key === "w") {
        moveY(-1);
    }
    
    // Only works if they press 'h' for "Hint"
    if (event.key === "s") {
        moveY(1);
    }
    if (event.key === "a") {
        moveX(-1);
    }
    
    // Only works if they press 'h' for "Hint"
    if (event.key === "d") {
        moveX(1);
    }
});

let x = 50;
let y=50;
function moveY(Y){
    const player = document.getElementById('player');
    y+=Y;
    if (y>100){
        y=100
    }
    if (y<0){
        y=0
    }
    player.style.top = String(y) + "%";
    player.innerHTML =String(y);
    FoodCheck()
}
function moveX(X){
    const player = document.getElementById('player');
    x+=X;
    if (x>100){
        x=100
    }
    if (x<0){
        x=0
    }
    player.style.left = String(x) + "%";
    
    FoodCheck()
}
function FoodCheck(){
    const food = document.getElementById('food');

    if ((x > fx-version) && (x < fx+version/2) && (y > fy-version/2)&&(y < fy+version/2)){
        const Score = document.getElementById('Score');
        food.style.opacity = "1";
        food.style.borderColor = "green";
        
        score+=1;
        Score.innerHTML =String(score) + "of 4, game: "+ String(version);

        RePlaceFood();


        if (score == 4){
            updateProgress("Danny",0,1,version+1);
            version+=1;
            score=0;
            
            
        }
        //update game versions
        if(version == 5 && score == 0){
                setInterval(RePlaceFood, 7000);
            }
        if(version >= 9){
                updateProgress("Danny",0,0,2);
                window.location.href = "../1.htm";
            }

    }else{
        food.style.borderColor = "black";
    }
}


let fx = 0;
let fy=0;
let Answer = [1,2,3];
function PlaceFood(){
    for (let i=1; i<=5; i++){


    const food = document.getElementById(`food${i}`);
    food.style.opacity = "0";
    const a=Math.floor(Math.random() * (80)+10);;
    const b=Math.floor(Math.random() * (80 )+10);

    if(i == Answer[version-1]){
    fx=a;
    fy=b;
    }

    food.style.top = String(b)+"%";
    food.style.left = String(a)+"%";

    setTimeout(() => {
        
        food.style.opacity = "1";



        
    }, 500 + 500*i);
}
    
    


}
let version = 1;

async function CheckVersion(){
    const Score = document.getElementById('Score');
 
    const [progress, sha, gameData] = await pullProgress("Danny",0,2);
    

    version = Number(progress);
    Score.innerHTML = String(version) + "of 8";

    
}




window.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded. Starting version check...");
    CheckVersion();
    PlaceFood()

    
});
