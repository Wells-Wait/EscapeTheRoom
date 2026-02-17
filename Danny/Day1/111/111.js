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

    if ((x > fx-version) && (x < fx+version) && (y > fy-version)&&(y < fy+version)){
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
            if(version == 5 && score == 0){
                setInterval(RePlaceFood, 7000);
            }
        }

    }else{
        food.style.borderColor = "black";
    }
}


let fx = 0;
let fy=0;
function RePlaceFood(){
    
    const food = document.getElementById('food');
    food.style.opacity = "1";
    fx=Math.floor(Math.random() * (80)+10);

    fy=Math.floor(Math.random() * (80 )+10);
    food.style.top = String(fy)+"%";
    food.style.left = String(fx)+"%";
    
    setTimeout(() => {
        if (version<=4){
        food.style.opacity = String(1.0-version/4.0);
        }else{
           food.style.opacity = String(1.0-(version-4)/4.0); 
        }
        
    }, 2000);
    


}
let version = 1;
let score =0;
async function CheckVersion(){
    const Score = document.getElementById('Score');
 
    const [progress, sha, gameData] = await pullProgress("Danny",0,1);
    
    Score.innerHTML = String(score) + "of 4, game: "+ progress + " of 8";
   
    version = Number(progress);

    
}




window.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded. Starting version check...");
    CheckVersion();
    RePlaceFood();
});
