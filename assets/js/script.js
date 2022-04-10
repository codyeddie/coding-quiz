var quizBox = document.getElementById("question-box");
var quizQuestion = document.getElementById("question");
var startQuiz = document.getElementById("quizStart");
var answerChoice1 = document.getElementById("answer1");
var answerChoice2 = document.getElementById("answer2");
var answerChoice3 = document.getElementById("answer3");
var answerChoice4 = document.getElementById("answer4");
var score = 0 
var timer;
var timerCounter = 30;
var countdown = document.getElementById("countdown");

quizBox.style.display = "none";

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
]

var currentQuestion = 0

startQuiz.addEventListener("click", function () {
    quizBox.style.display = "block";
    startQuiz.style.display = "none";
    genQuestion();
    timer = setInterval(function() {
        countdown.textContent = "timer:" + timerCounter;
        if (timerCounter > 0) {
            timerCounter--
        } else {
            clearInterval(timer)
            countdown.textContent = "time's up";
        }
    },1000)
})

function genQuestion() {
    quizQuestion.textContent = questionsList[currentQuestion].question;
    answerChoice1.textContent = questionsList[currentQuestion].answer1;
    answerChoice2.textContent = questionsList[currentQuestion].answer2;
    answerChoice3.textContent = questionsList[currentQuestion].answer3;
    answerChoice4.textContent = questionsList[currentQuestion].answer4;
}

answerChoice1.addEventListener("click", checkAnswer)
answerChoice2.addEventListener("click", checkAnswer)
answerChoice3.addEventListener("click", checkAnswer)
answerChoice4.addEventListener("click", checkAnswer)

function checkAnswer() {
    var answerSelection = this.textContent;
    console.log(answerSelection);
    if (answerSelection == questionsList[currentQuestion].correctAnswer){
        score += 10;
    } else {
        timerCounter -= 5
    }
    if (currentQuestion < questionsList.length - 1) {
        currentQuestion++
        genQuestion();
        console.log(score,)
    }
    else {
        clearInterval(timer)
    }
    console.log("check")
}




// quizBox.appendChild(quizQuestion);
// quizBox.appendChild(answerList);
// answerList.appendChild(answerChoice1);
// answerList.appendChild(answerChoice2);
// answerList.appendChild(answerChoice3);
// answerList.appendChild(answerChoice4);