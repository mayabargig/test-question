var intervalId;

function grow(){
    var height = 0;
    var width = 0;

    intervalId = setInterval (function (){
        if(height > heightUser.value || width > widthUser.value){
            clearInterval(intervalId)
        }
        box.style.height = `${height++}px`
        box.style.width = `${width++}px`
    }, 50)
}

box.style.background = "red";
startBtn.addEventListener("click", grow);
stopBtn.addEventListener("click",function(){clearInterval(intervalId)})