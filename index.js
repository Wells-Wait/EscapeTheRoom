


function Enter(){
    const button = document.getElementById('button');
    const Text = document.getElementById('CodeField');
    var text = Text.value;


    const now = new Date();
    
 
    if (/*now.getDate() < 20*/false){
     button.innerHTML = "Game has not yet started";

    }else if(text=="User"){
        window.location.href = "Danny/Day1/1.htm";
    }else{
        button.innerHTML = "Fail not good code";
    }
}

