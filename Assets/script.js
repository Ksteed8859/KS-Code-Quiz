var start = document.getElementById("start");
var startButton = document.getElementById("start-btn");

var highscoreLink = document.getElementById("highscore");
var timerText = document.getElementById("timer-text")

var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var questionbox = document.getElementById("questionbox");

var choiceBtn1 = document.querySelector(".choice1");
var choiceBtn2 = document.querySelector(".choice2");
var choiceBtn3 = document.querySelector(".choice3");
var choiceBtn4 = document.querySelector(".choice4");

var a1 = document.getElementById("A");
var a2 = document.getElementById("B");
var a3 = document.getElementById("C");
var a4 = document.getElementById("D");
var check = document.getElementById("correct-status");

var finishPage = document.getElementById("finish-page");
var finalScore = document.getElementById("final-score");
var initials = document.getElementById("initials");
var submitBtn = document.getElementById("submit-btn");
var finish = document.getElementById("finish")

var highscorePage = document.getElementById("highscore-page");
var scoreListEl = document.getElementById("highScores")
scoreList = [];
var userRecord = document.getElementById("record");
var backBtn = document.getElementById("back-btn");


var questions = [
    {
        q: "Commonly used data types do not include:",
        choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        correct: "c"
    },
    {
        q: "The condition in an if / else statement is enclosed within ____.",
        choices: ["1. Quotes", "2. Curly Brackets", "3. Parentheses", "4. Square Brackets"],
        correct: "c"
    },
    {
        q: "Arrays in Javascript can be used to store ____.",
        choices: ["1. Numbers and Strings", "2. Other Arrays", "3. Booleans", "4. All of the Above"],
        correct: "d"
    },
    {
        q: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
        correct: "c"
    },
    {
        q: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["1 Javascript", "2. Terminal / Bash", "3. For Loops", "4. Console Log"],
        correct: "d"
    },
];

var secondsLeft = 75;
var questionNumber = 0;
var score = 0;
var questionCount = 1;


function timerStart() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerText.textContent = "Time: " + secondsLeft + " seconds";
            if (secondsLeft <=0){
                clearInterval(timerInterval);
                timerText.textContent = "Time is up!";
                finish.textContent = "Time is up!";
                quizEnd();
            } else if (questionCount >= questions.length +1) {
                clearInterval(timerInterval);
                quizEnd();
            }
    }, 1000);
}


function startQuiz () {
    start.style.display = "none";
    questionbox.style.display= "block";
    quiz.style.display = "block";
    questionNumber = 0
    timerStart();
    loadQuestion(questionNumber);
  
}

function loadQuestion (n) {
    question.textContent = questions[n].q;
    a1.textContent = questions[n].choices[0];
    a2.textContent = questions[n].choices[1];
    a3.textContent = questions[n].choices[2];
    a4.textContent = questions[n].choices[3];
    questionNumber = n;
}

function checkAnswer(event) {
    event.preventDefault();
    check.style.display = "block";
    setTimeout(function () {
        check.style.display = "none";
    }, 1000);

    if (questions[questionNumber].correct == event.target.value) {
        check.textContent = "Correct";
        score = score + 1;
    } else {
        secondsLeft = secondsLeft - 10;
        check.textContent = "Incorrect";
    }

    if (questionNumber < questions.length -1) {
        loadQuestion(questionNumber +1);
    } else {
        quizEnd();
    }
    questionCount++;
}

function quizEnd() {
    quiz.style.display = "none";
    finishPage.style.display = "block";
    finalScore.textContent = "Your final score is: " + score;
    timerText.style.display = "none";
}

// High Scores
function addScore(event) {
    event.preventDefault();

    scoreList.push({initials, score});

    scoreListEl.innerHTML="";
    for (var i =0; i < scoreList.length; i++) {
        var li = document.createElement("li");
        li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
        scoreListEl.append(li);
    }
    saveScores();
    displayScores();
}
function saveScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}
function displayScores() {
    var savedScoreList = json.parse(localStorage.getItem("scoreList"));
    if (savedScoreList !== null) {
        scoreList = savedScoreList
    }
}

startButton.addEventListener("click", startQuiz);
choiceBtn1.addEventListener("click", checkAnswer);
choiceBtn2.addEventListener("click", checkAnswer);
choiceBtn3.addEventListener("click", checkAnswer);
choiceBtn4.addEventListener("click", checkAnswer);

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    finishPage.style.display = "none";
    start.style.display = "none";
    highscorePage.style.display = "block";
    quiz.style.display = "none";
    addScore;
});

highscoreLink.addEventListener("click", function(event) {
    event.preventDefault();
    finishPage.style.display = "none";
    start.style.display = "none";
    highscorePage.style.display = "block";
    quiz.style.display ="none";
    addScore();
});

backBtn.addEventListener("click", function(event) {
    event.preventDefault();
    finishPage.style.display = "none";
    start.style.display = "block";
    highscorePage.style.display = "none";
    quiz.style.display ="none";
    location.reload();
});