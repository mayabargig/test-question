var counterWidth= 50;
var counterHeight= 50;
var interval;


function getValuesFromUser (){
    var divWidth = myWidth.value;
    var divHeight = myHeight.value;

    interval = setInterval(function(){
        if (counterWidth < divWidth){
            counterWidth++;
            myDiv.style.width= counterWidth + "px";
        }
        if(counterHeight < divHeight){
            counterHeight++;
            myDiv.style.height = counterHeight + "px";
        }
    
        if(counterWidth == divWidth && counterHeight == divHeight){
            alert("the result!");
            clearInterval(interval);
        }
        }, 50);

        return false;
    }

function stopGrowing() {
    clearInterval(interval);
}