


function Enter(){
    const button = document.getElementById('button');
    const Text = document.getElementById('CodeField');
    var text = Text.value;


    const now = new Date();
    
    const [day, hour, minute, second]=GetTimeLeft();
    if (day>=7){
     button.innerHTML = "Game has not yet started";

    }else if(text=="User"){
        window.location.href = `Danny/Day${6-day}/1.htm`;
    }else{
        button.innerHTML = "Fail not good code";
    }
}

