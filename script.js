var questions = [{

    question1: "What is not one of the basic Data Types in Javascript?",
    a: [{text:"Boolean", isCorrect: false},
    {text: "String", isCorrect: false},
    {text:"Array", isCorrect: true},
    {text:"Number", isCorrect: false}
    ]
    },
    {


    question2:"What symbol is used to assign a variable?",
    a: [{text: "<", isCorrect: false},
    {text: "=", isCorrect: true},
    {text: "*", isCorrect: false},
    {text: "&", isCorrect: false},
    ]
    },
    {

    question3: "What is this an example of? answerButton",
    a:[{text: "A variable", isCorrect: false},
    {text: "An object", isCorrect: false},
    {text: "An array", isCorrect: false},
    {text: "Camel casing", isCorrect: true},
    ]
    }
    ]


var timerEl = document.getElementById('#countdown') 
var highscore= document.getElementById('#highscore')
var start = document.getElementById("#btnStart")
var buttonAnswer = document.querySelector(".btnAnswer")

function countdown () {
    var timeLeft = 60;

    var timeInterval = setInterval(function(){
        if (timeLeft >= 0) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--
             
        }
        


       /* else if(boolean, string, number === true){
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
        }*/
          
        
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
         timeLeft -10
    }

    if(string === true) {
        timeLeft -10
    }
}

boolean.addEventListener("click", buttonClick)