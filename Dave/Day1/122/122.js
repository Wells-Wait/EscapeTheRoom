






let Answer = [1,2,4,5,3,4,2];

async function getClue(){
    const text = document.getElementById(`text`);
    const [progress, sha, gameData] = await pullProgress("Danny",0,2);
    const answer = Answer[progress-1]
    text.innerHTML = answer;
    text.style.color = `rgb(${Math.floor(Math.random()*150)}, ${Math.floor(Math.random()*150)}, ${Math.floor(Math.random()*150)})`;
}
getClue()
setInterval(getClue, 5000);