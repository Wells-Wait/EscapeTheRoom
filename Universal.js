










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
