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
    if (event.key === "f"){
        FoodCheck();
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
    

}
async function FoodCheck(){
    const food = document.getElementById(`food${order[Answer[version-1]-1]}`);
   
    
    if ((x > fx-2) && (x < fx+2) && (y > fy-2)&&(y < fy+2)){
        
        food.style.opacity = "1";
        food.style.borderColor = "green";
        
        
        Score.innerHTML = String(version) + "of 8";
        await updateProgress("Danny", 0,2,String(version+1));
        await CheckVersion()


        setTimeout(() => {
        
        food.style.borderColor = "black";
        PlaceFood();



        
    }, 500);
    

    

    }else{
        food.style.borderColor = "black";
        version-=1;
        if (version<1){
            version=1;
        }
        await updateProgress("Danny", 0,2,String(version));
        await CheckVersion()
        
        PlaceFood();


    }
}


let fx = 0;
let fy=0;
let Answer = [1,2,4,5,3,4,2];
let order = [1,2,3,4,5];
function PlaceFood(){
    
    for (let i = order.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        
        // Swap elements array[i] and array[j]
        [order[i], order[j]] = [order[j], order[i]];
    }
    
    
    for (let i=0; i<5; i++){


    const food = document.getElementById(`food${order[i]}`);
    food.style.opacity = "0";
    const a=Math.floor(Math.random() * (80)+10);;
    const b=Math.floor(Math.random() * (80 )+10);

    if(i+1 == Answer[version-1]){
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
