var questions = [
    {
      question: "What is not one of the basic Data Types in Javascript?",
      answers: ["Boolean", "String", "Array", "Number"],
      correctAnswer: "Array",
    },
    {
      question: "What symbol is used to assign a variable?",
      answers: ["=", "*", "&", "<"],
      correctAnswer: "=",
    },
    {
      question: "What is this an example of? answerButton",
      answers: ["A variable", "An object", "An array", "Camel casing"],
      correctAnswer: "Camel casing",
    },
  ];
  
  var timerEl = document.getElementById("countdown");
  var highscore = document.getElementById("highscore");
  var start = document.getElementById("btnStart");
  var buttonAnswer = document.querySelectorAll(".btnAnswer");
  var question = document.querySelectorAll(".question");
  var questionIndex = 0;
  //var displayMessage = "Please Try again";
  var score = 0;
  var timeInterval;
  
  // When start button clicked, this loops through the questions using the submitAnswer function
  function displayQuestion() {
    for (var i = 0; i < buttonAnswer.length; i++) {
      buttonAnswer[i].addEventListener("click", submitAnswer);
    }
  
    var question = document.querySelector(".question");
    question.textContent = questions[questionIndex].question;
  
    var btnAnswer1 = document.querySelector(".btnAnswer1");
    btnAnswer1.textContent = questions[questionIndex].answers[0];
  
    var btnAnswer2 = document.querySelector(".btnAnswer2");
    btnAnswer2.textContent = questions[questionIndex].answers[1];
  
    var btnAnswer3 = document.querySelector(".btnAnswer3");
    btnAnswer3.textContent = questions[questionIndex].answers[2];
  
    var btnAnswer4 = document.querySelector(".btnAnswer4");
    btnAnswer4.textContent = questions[questionIndex].answers[3];
  }
  
  function submitAnswer(event) {
    event.preventDefault();
    var selectedAnswer = event.target.textContent;
    var currentQuestion = questions[questionIndex]; // Move this line here
    if (selectedAnswer === currentQuestion.correctAnswer) {
      score++;
    }
    questionIndex++;
    if (questionIndex < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    clearInterval(timeInterval);
    var finalScore = score;
    var endMessage = "Quiz ended. Your score is: " + finalScore;
    console.log(endMessage);
  }
  
  function countdown() {
    var timeLeft = 60;
    timeInterval = setInterval(function () {
      if (timeLeft >= 0) {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--;
      } else {
        timerEl.textContent = "";
        clearInterval(timeInterval);
        endQuiz();
      }
    }, 1000);
  }
  
  function callTwo() {
    countdown();
    displayQuestion();
    start.style.display ="none";
  }
  
  start.addEventListener("click", callTwo);
  
  console.log(buttonAnswer.length);