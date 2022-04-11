// variables that are declared in the global scope that are going to be used in functions
var quizBox = document.getElementById("question-box");
var quizQuestion = document.getElementById("question");
var startQuiz = document.getElementById("quizStart");
var answerChoice1 = document.getElementById("answer1");
var answerChoice2 = document.getElementById("answer2");
var answerChoice3 = document.getElementById("answer3");
var answerChoice4 = document.getElementById("answer4");
var score = 0;
var timer;
var timerCounter = 30;
var countdown = document.getElementById("countdown");

// setting the quizbox div to be hidden until the start quiz button is clicked
quizBox.style.display = "none";
countdown.style.display = "none";

// function that runs when game is over that prompts the user to enter their initials to be used to log highscore
var getInitials = function () {
    var initials = "";
    while (initials === "" || initials == null) {
        initials = prompt("Please enter your initials to log your score.");
    }
    console.log("Your intitials are " + initials);
    countdown.textContent = "Great job " + initials + "! You finished with a score of " + score + " with " + timerCounter + " seconds left! Come back later or refresh the page to try again.";
    localStorage.setItem('Saved Score', initials + score + timerCounter);
}

// an array that contains all the questions and answers for the quiz
var questionsList = [
    {
        question: "What is HTML?",
        answer1: "hypertext markup language",
        answer2: "hot tea mango lemon",
        answer3: "a football team",
        answer4: "a type of gaming console",
        correctAnswer: "hypertext markup langauge",
    },
    {
        question: "What is CSS?",
        answer1: "cool styling stuff",
        answer2: "a popular tv show",
        answer3: "a fastfood restaurant",
        answer4: "cascading style sheet",
        correctAnswer: "cascading style sheet",
    },
    {
        question: "What is Javascript?",
        answer1: "adding functionality to page",
        answer2: "a coffee flavor",
        answer3: "an old book",
        answer4: "a type of computer",
        correctAnswer: "adding functionality to page",
    },
    {
        question: "What is a Web API?",
        answer1: "one of Spider-Man's web shoooter settings",
        answer2: "an application programming interface for the web",
        answer3: "a website on the internet",
        answer4: "an iphone app",
        correctAnswer: "an application programming interface for the web",
    },
    {
        question: "What is Jquery?",
        answer1: "a web development language",
        answer2: "an awesome boardgame for your family",
        answer3: "a JavaScript code library",
        answer4: "a notebook app for your phone",
        correctAnswer: "a JavaScript code library",
    },
    {
        question: "What is Bootstrap?",
        answer1: "a shoe company",
        answer2: "a framework for front end web and app development",
        answer3: "a snowboarding company",
        answer4: "a piece of leather on your boot",
        correctAnswer: "a framework for front end web and app development",
    },
]

// setting a variable to use as an index value for the questionsList array
var currentQuestion = 0

// function that allows the quiz to begin and timer to start 
var quizBegin = function () {
    quizBox.style.display = "block";
    startQuiz.style.display = "none";
    countdown.style.display = "block";
    genQuestion();
    timer = setInterval(function () {
        countdown.textContent = "Time Left: " + timerCounter;
        if (timerCounter > 0) {
            timerCounter--
        } else {
            clearInterval(timer)
            getInitials();
            quizBox.style.display = "none"
        }
    }, 1000)
};

// adding an event listener to the start quiz button so it can run the quiz when clicked
startQuiz.addEventListener("click", quizBegin);

// function that generates questions using the questionsList array objects and their properties
function genQuestion() {
    quizQuestion.textContent = questionsList[currentQuestion].question;
    answerChoice1.textContent = questionsList[currentQuestion].answer1;
    answerChoice2.textContent = questionsList[currentQuestion].answer2;
    answerChoice3.textContent = questionsList[currentQuestion].answer3;
    answerChoice4.textContent = questionsList[currentQuestion].answer4;

}

// adding event listeners to the answer buttons
answerChoice1.addEventListener("click", checkAnswer)
answerChoice2.addEventListener("click", checkAnswer)
answerChoice3.addEventListener("click", checkAnswer)
answerChoice4.addEventListener("click", checkAnswer)


// function that checks the answer based on button selection and either adds points to score total or subtracts from total time left on quiz
function checkAnswer() {
    var answerSelection = this.textContent;
    console.log(answerSelection);
    if (answerSelection == questionsList[currentQuestion].correctAnswer) {
        score += 10;
        currentQuestion++
    } else {
        timerCounter -= 5
    }
    if (currentQuestion < questionsList.length - 1) {
        currentQuestion++
        genQuestion();
        console.log(score,)
    }
    else if (currentQuestion == questionsList.length) {
        clearInterval(timer)
        getInitials();
    }
}