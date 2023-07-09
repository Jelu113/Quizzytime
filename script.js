var start = confirm("Would you like to take a quiz?")
var timerEl = document.getElementById('countdown') 
var highscore= document.getElementById('highscore')


while (true) {  
   if(confirm("Would you like to take a quiz?")) {
    console.log ("Continuing...")

   break;

   } else { 
    console.log ("Cancelled");
    continue;
   }
}

function countdown () {
    var timeLeft = 5;

    var timeInterval = setInterval(function(){
        if (timeLeft >= 0) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft-- 
        }
        else if(boolean, string, number === true){
            timeLeft - 10
        }
        else {
            timerEl.textContent ='';
            clearInterval(timeInterval);
            confirm("You loose")
            console.log ("Lost")
            confirm("Would you like to play again?")
          
            if (confirm("Would you like to play again?")){
            console.log ("Yes");
            window.location.reload();
        } else {
            console.log ("No");
            window.location.reload();
        }
          
        }
}, 1000);
    
}
countdown ()

function buttonClick() {
    var boolean = document.getElementById('boolean')
    var string = document.getElementById('string')
    var number = document.getElementById('number')
    var array = document.getElementById("array")
    //var button = doument.getElement("button")
     //boolean.value = button;
    if(boolean === true) {
        return timeLeft -10
    }

    if(string === true) {
        timeLeft -10
    }
}

boolean.addEventListener("click", buttonClick)