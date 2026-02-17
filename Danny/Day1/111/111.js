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
    if ((x > fx-1) && (x < fx+1) && (y > fy-1)&&(y < fy+1)){

food.style.borderColor = "green";
    }else{
        food.style.borderColor = "black";
    }
}


let fx = 0;
let fy=0;
async function RePlaceFood(){
    
    const food = document.getElementById('food');
    fx=Math.floor(Math.random() * (100));

    fy=Math.floor(Math.random() * (100 ));
    food.style.top = String(fy)+"%";
    food.style.left = String(fx)+"%";
    if (version == 2){
    setTimeout(() => {
        food.style.display = "none";
        
    }, 2000);
    
}


}
let version = 1;

async function CheckVersion(){
    const Score = document.getElementById('Score');
    // Score.style.innerHTML = 2;
    const [progress, sha, gameData] = await pullProgress("Danny",0,1);
    
    //Score.style.innerHTML = progress;
    window.location.href = `11${progress}/11${progress}.htm`;
    //  version = Number(progress);
    
}


async function Brother1_1(){
    const [progress, sha, gameData] = await pullProgress("Danny",0,0);

    window.location.href = `11${progress}/11${progress}.htm`;
}


RePlaceFood();
setInterval(RePlaceFood, 7000);


