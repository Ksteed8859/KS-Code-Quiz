// Constants and Variables

const startButton = document.querySelector(".start-button");
const quiz = document.querySelector(".quiz");
const question = document.querySelector(".question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const timerEl = document.querySelector(".timer-count");

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
]
