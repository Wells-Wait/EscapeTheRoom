






let Answer = [1,2,4,5,3,4,2];

async function getClue(){
    const text = document.getElementById(`text`);
    const [progress, sha, gameData] = await pullProgress("Danny",0,2);
    const answer = Answer[progress-1]
    text.innerHTML = answer;
}
getClue()
setInterval(getClue, 1000);