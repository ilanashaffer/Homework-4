let score = 0;
let i = 0;
const startButton = document.getElementById('startbutton');
const submitButton = document.getElementById('submitbutton');
const header = document.getElementById('title-header');
const timerElement = document.getElementById('countdown');
const questionsContainer = document.getElementById('questions-container');
const questionElement = document.getElementById('question');
const choiceAButton = document.getElementById('choiceA');
const choiceBButton = document.getElementById('choiceB');
const choiceCButton = document.getElementById('choiceC');
const choiceDButton = document.getElementById('choiceD');

startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', endQuiz);

function startQuiz() {
    startButton.classList.add('hide');
    submitButton.classList.add('hide');
    header.classList.add('hide');
    questionsContainer.classList.remove('hide');
    timer();
    nextQuestion();
};

function nextQuestion() {
    questionElement.innerText = questions[i].question;
    choiceAButton.innerText = questions[i].choices[0].choiceA;
    choiceBButton.innerText = questions[i].choices[1].choiceB;
    choiceCButton.innerText = questions[i].choices[2].choiceC;
    choiceDButton.innerText = questions[i].choices[3].choiceD;

    if (questions[i].question === questions[4].question) {
        submitButton.classList.remove('hide');
    }
    
    choiceAButton.addEventListener('click', function() {
        if (questions[i].choices[0].correct) {
            score++;
            addI();
        } else {
            addI();
        }
    });
    
    choiceBButton.addEventListener('click', function() {
        if (questions[i].choices[1].correct) {
            score++;
            addI();
        } else {
            addI();
        }
    });
    
    choiceCButton.addEventListener('click', function() {
        if (questions[i].choices[2].correct) {
            score++;
            addI();
        } else {
            addI();
        }
    });
    
    choiceDButton.addEventListener('click', function() {
        if (questions[i].choices[3].correct) {
            score++;
            addI();
        } else {
            addI();
        }
    });
};

function addI() {
    i++;
    nextQuestion();
};

function timer() {
    let time = 59;
    setInterval(function() {
    timerElement.innerHTML = time + ' seconds remaining';
    time -= 1;
    if (time <= -1) {
    alert('Time is up!');
    clearInterval(timer);
  }
}, 1000);
};


function endQuiz() {
    choiceAButton.classList.add('hide');
    choiceBButton.classList.add('hide');
    choiceCButton.classList.add('hide');
    choiceDButton.classList.add('hide');
    submitButton.classList.add('hide');
    timerElement.classList.add('hide');
    questionElement.innerText = 'You completed the quiz! You\'re score is: ' + score + '/5 !';
};

let questions = [
    {
    question: 'What is Javascript?',
    choices: [
        { choiceA: 'a file format', correct: false },
        { choiceB: 'a content management system', correct: false },
        { choiceC: 'a responsive web design framework', correct: false },
        { choiceD: 'a programming language', correct: true }
        ]
    },
    {
    question: 'What is the correct syntax for declaring a variable?',
    choices: [
        { choiceA: 'var animal;', correct: true },
        { choiceB: 'var[animal]', correct: false },
        { choiceC: 'var.animal', correct: false },
        { choiceD: 'var = animal', correct: false }
        ]
    },
    {
    question: 'What is an array?',
    choices: [
        { choiceA: 'a list-like object', correct: true },
        { choiceB: 'a type of function', correct: false },
        { choiceC: 'a method', correct: false },
        { choiceD: 'a property', correct: false }
        ]
    },
    {
    question: 'What would be the output of the following: var number = Math.floor(Math.random() * 10);',
    choices: [
        { choiceA: 'a number between 0-9', correct: true },
        { choiceB: '10', correct: false },
        { choiceC: 'a number between 0-10', correct: false },
        { choiceD: 'a number between 1-9', correct: false }
        ]
    },
    {
    question: 'What is a for loop?',
    choices: [
        { choiceA: 'a string operator', correct: false },
        { choiceB: 'a template literal', correct: false },
        { choiceC: 'an if/else statement', correct: false },
        { choiceD: 'an iteration statement', correct: true }
        ]
    }
];