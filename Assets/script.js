var start = document.getElementById("start");
var startButton = document.getElementById("start-btn");

var highscoreLink = document.getElementById("highscore");
var timerText = document.getElementById("timer-text")

var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var carousel = document.getElementById("carouselbox");

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
var userRecord = document.getElementById("record");
var backBtn = document.getElementById("back-btn");

//check
var questions = [
    {
        q: "Commonly used data types do not include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        correct: "c"
    },
    {
        q: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correct: "c"
    },
    {
        q: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "d"
    },
    {
        q: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        correct: "c"
    },
    {
        q: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        correct: "d"
    },
];

var secondsLeft = 75;
var questionNumber = 0;
var score = 0;
var questionCount = 1;

//check
function timerStart() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerText.textContent = "Time: " + secondsLeft + " seconds";
            if (secondsLeft <=0){
                clearInterval(timerInterval);
                timerText.textContent = "Time is up!";
                finish.textContent = "Time is up!";
                gameOver();
            } else if (questionCount >= questionArray.length +1) {
                clearInterval(timerInterval);
                gameOver();
            }
    }, 1000);
}

//check
function startQuiz () {
    start.style.display = "none";
    quiz.style.display = "block";
    questionNumber = 0
    timerStart();
    loadQuestion(questionNumber);
  
}
//check
function loadQuestion (n) {
    question.textContent = questions[n].q;
    a1.textContent = questions[n].choices[0];
    a2.textContent = questions[n].choices[1];
    a3.textContent = questions[n].choices[2];
    a4.textContent = questions[n].choices[3];
    questionNumber = n;
}
//Not Working
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

function getScore() {
    var currentList =localStorage.getItem("ScoreList");
    if (currentList !== null ){
        freshList = JSON.parse(currentList);
        return freshList;
    } else {
        freshList = [];
    }
    return freshList;
}

function addScore() {
    userRecord.innerHTML = "";
    userRecord.style.display ="block";
    var li = document.createElement("li");
    li.textContent = item.initials + " " + item.score;
    li.setAttribute("data-index", i);
    userRecord.appendChild(li);
}

function addItem (n) {
    var addedList = getScore()
    addedList.push(n);
    localStorage.setItem("ScoreList", JSON.stringify(addedList));
}
function saveScore () {
    var scoreItem ={
        user: userInitial.value,
        score: totalScore
    }
    addItem(scoreItem);
    renderScore();
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
    saveScore()
});

highscoreLink.addEventListener("click", function(event) {
    event.preventDefault();
    finishPage.style.display = "none";
    start.style.display = "none";
    highscorePage.style.display = "block";
    quiz.style.display ="none";
    renderScore();
});

backBtn.addEventListener("click", function(event) {
    event.preventDefault();
    finishPage.style.display = "none";
    start.style.display = "block";
    highscorePage.style.display = "none";
    quiz.style.display ="none";
    location.reload();
});