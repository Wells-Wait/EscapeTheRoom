


async function Brother1_1(){
    const [progress, sha, gameData] = await pullProgress("Danny",0,0);

    window.location.href = `11${progress}/11${progress}.htm`;
}
async function Brother2_2(){
    const [progress, sha, gameData] = await pullProgress("Dave",0,0);
    if ([6,3,2].includes(Number(progress))){

    window.location.href = `22${progress}/22${progress}.htm`;
    }else{
        window.location.href = `22${0}/22${0}.htm`;
    }
}