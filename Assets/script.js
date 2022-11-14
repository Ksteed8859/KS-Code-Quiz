// Constants and Variables
const header = document.querySelector(".header");
const startButton = document.getElementsByClassName("start-button");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const timerEl = document.getElementById("timer-count");
const quizTimer = document.getElementById("quizTimer")

// Questions

var questions = [
    {
        question: "Commonly used data types do not include ___________.",
        choiceA: "Strings",
        choiceB: "Booleans",
        choiceC: "Alerts",
        choiceD: "Numbers",
        correct : "C"
    }, {
        question : "The condition in an if/else statement is inclosed in _________.",
        choiceA : "Quotes",
        choiceB: "Curly Brackets",
        choiceC: "Parenthesis",
        choiceD: "Square Brackets",
        correct : "C"
    }, {
        question : "Arrays in Javascript can be used to store __________.",
        choiceA : "Numbers and Strings",
        choiceB : "Other Arrays",
        choiceC : "Booleans",
        choiceD: "All of the Above",
        correct : "D"
    }, {
        question : "String values must be enclosed within __________ when being assigned to variables",
        choiceA : "Commas",
        choiceB : "Curly Brackets",
        choiceC : "Quotes",
        choiceD: "Parenthesis",
        correct : "C"
    }, {
        question : "A very useful tool used druing development adn debugging for printing content to the debugger is:",
        choiceA : "Javascript",
        choiceB : "terminal/bash",
        choiceC : "for loops",
        choiceD: "console log",
        correct : "D"
    }
];

const lastQuestion= questions.length - 1;
var runningQuestion = 0;

//Render in a question

function renderQuestion () {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}
// Render in timer
//function renderCounter() {
    
//}

//Start Quiz

function startQuiz(){
    //header.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    //quizTimer = setInterval(renderCounter, 1000);
}

startButton.addEventListener("click", startQuiz());