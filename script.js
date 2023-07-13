

var questions = [{

    question: "What is not one of the basic Data Types in Javascript?",
    answers: ["Boolean", "String", "Array", "Number"],
    correctAnswer: "Array"

},

{

    question: "What symbol is used to assign a variable?",
    answers: ["=", "*", "&", "<"],
    correctAnswer: "="
},
{
    question: "What is this an example of? answerButton",
    answers: ["A variable", "An object", "An array", "Camel casing"],
    correctAnswer: "Camel casing"

}

]


var timerEl = document.getElementById('countdown')
var highscore = document.getElementById('highscore')
var start = document.getElementById("btnStart")
var buttonAnswer = document.querySelectorAll(".btnAnswer")
var questionIndex = 0

function displayQuestion() {
    var question = document.querySelector(".question")
    question.textContent = questions[questionIndex].question

    var btnAnswer1 = document.querySelector(".btnAnswer1")
    btnAnswer1.textContent = questions[questionIndex].answers[0]

    var btnAnswer2 = document.querySelector(".btnAnswer2")
    btnAnswer2.textContent = questions[questionIndex].answers[1]

    var btnAnswer3 = document.querySelector(".btnAnswer3")
    btnAnswer3.textContent = questions[questionIndex].answers[2]

    var btnAnswer4 = document.querySelector(".btnAnswer4")
    btnAnswer4.textContent = questions[questionIndex].answers[3];

    function countdown() {
        var timeLeft = 60;
        var timeInterval = setInterval(function () {

            if (timeLeft >= 0) {
                timerEl.textContent = "Time: " + timeLeft;
                timeLeft--;

            } else {
                timerEl.textContent = "";
                clearInterval(timeInterval);
                // displayMessage() //create function to say they lost and ask to play again
            }

        }, 1000);

    }
    countdown()
}


//create a function to -10 seconds the time for wrong answers
//create way to store the correct and incorrect answers and display them
//creat a next button or a way to move from one screen to the next. 
start.addEventListener("click", displayQuestion);

// for (var i = 0; i = buttonAnswer; i++)
//    .addEventListener ("click", btnAnswer)