
//set up a questions array full of objects in order to pull the information throughout the app.
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
    var currentQuestion = questions[questionIndex];
  
    if (selectedAnswer === currentQuestion.correctAnswer) {
      score++;
    } else {
      // Subtract 10 seconds from the time
      var timeLeft = parseInt(timerEl.textContent.split(" ")[1]);
      timeLeft -= 10;
      timerEl.textContent = "Time: " + timeLeft;
    }
   //adding the next question to the page.
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
    var playerName = prompt("Enter your initials:");
    var highScores = loadHighScores();
    highScores.push({ name: playerName, score: finalScore });
    saveHighScores(highScores);
    var endMessage = "Quiz ended. Your score is: " + finalScore;
    alert(endMessage);

    var playAgain = confirm("Do you want to play again?");
    if (playAgain) {
      resetQuiz();
    } else {
      var thanksMessage = "Thanks for playing"
      alert(thanksMessage);
    }
  }  

  function resetQuiz() {
    // Reset variables and states
    score = 0;
    questionIndex = 0;
  
    // Reset the timer
    clearInterval(timeInterval);
    timerEl.textContent = "";
  
    // Start the quiz again
    countdown();
    displayQuestion();
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
  
  function saveHighScores(highScores) {
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }

  function loadHighScores() {
    var highScores = localStorage.getItem("highScores");
    if (highScores) {
      return JSON.parse(highScores);
    } else {
      return [];
    }
  }

  function displayHighScores() {
    var highScores = loadHighScores();
    // Sort the high scores in descending order
    highScores.sort(function (a, b) {
      return b.score - a.score;
    });
    // Display the high scores
    var highScoresList = "";
    for (var i = 0; i < highScores.length; i++) {
      highScoresList += highScores[i].name + ": " + highScores[i].score + "\n";
    }
    alert("High Scores:\n" + highScoresList);
  }

  highscore.addEventListener("click", displayHighScores);

  console.log(buttonAnswer.length);