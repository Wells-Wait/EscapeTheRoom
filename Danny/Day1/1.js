


async function Brother1_1(){
    const [progress, sha, gameData] = await pullProgress("Danny",0,0);

    window.location.href = `11${progress}.htm`;
}
async function Brother2_2(){
    const [progress, sha, gameData] = await pullProgress("Danny",0,1);

    window.location.href = `/22${progress}.htm`;
}