
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const startTimer = document.getElementById('time')
// const resultScore = document.getElementById('score')


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
 console.log('started')
 startButton.classList.add('hide')
//  resultScore.classList.remove('hide')
 shuffledQuestions = questions.sort(() => Math.random() - .5)
 currentQuestionIndex = 0
 questionContainerElement.classList.remove('hide')
 setNextQuestion()
 timecounter()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)

    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }
    else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
    result(correct)
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('btn-correct')
        // result()
    }
    else{
        element.classList.add('btn-wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('btn-correct')
    element.classList.remove('btn-wrong')
}



// function result (correct){
//     setResult(resultScore , correct)
    
// }
//  function setResult(element, correct){
//     var score = {correct: true, point: 1 }
//     sessionStorage.setItem('score', JSON.stringify(score))
//     var point = JSON.parse(sessionStorage.getItem('score'))
//     if (correct){
//         element.innerHTML = point.point++
//         console.log(point)
//     }
//     else{
//     element.innerHTML = point.point + 0
//     }
//  }


 const questions = [
    {
        question: "what is 2 + 2?",
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    },
    {
        question: "what is 2 x 2?",
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    },
    {
        question: "who is the best pianist this year?",
        answers: [
            {text: 'Sunny', correct: true},
            {text: 'Anthony Burger', correct: false},
            {text: 'Pianist Mervelous', correct: false},
            {text: 'Scott Joplin', correct: false}
        ]
    },
    {
        question: "what is the name of the female corper that ran away to Niger because of Covid-19 fear?",
        answers: [
            {text: 'Corper Christain', correct: true},
            {text: 'Corper Mfon', correct: false},
            {text: 'Corper Treasure', correct: false},
            {text: 'Corper Foluke', correct: false}
        ]
    },
    {
        question: "what are the name of the Batch B1 fresh outgoing corper passing out on 28th May 2020?",
        answers: [
            {text: 'Corper Etiano', correct: true},
            {text: 'Corper Tunde', correct: true},
            {text: 'Corper Abiola', correct: false},
            {text: 'Corper Philip', correct: false}

        ]
    },
    {
        question: "what is the name of the Best Mathematician Abiola has seen in year?",
        answers: [
            {text: 'Corper Etiano', correct: false},
            {text: 'Corper Tunde', correct: false},
            {text: 'Corper Abiola', correct: false},
            {text: 'Corper Philip(HKDASS)', correct: true}

        ]
    },

    {
        question: "who is the Best tenor Singer i've seen in years?",
        answers: [
            {text: 'Corper Sunny', correct: false},
            {text: 'Corper ID', correct: true},
            {text: 'Corper Abiola', correct: false},
            {text: 'Corper Philip', correct: false}

        ]
    },
    {
        question: "what is your opinion about me?",
        answers: [
            {text: 'Talented', correct: true},
            {text: 'Shy', correct: false},
            {text: 'Whiner', correct: false},
            {text: 'Cool', correct: false}

        ]
    },
    {
        question: "who is the best Choir Master Sokoto has ever produced?",
        answers: [
            {text: 'Corper Sunny', correct: false},
            {text: 'Corper ID', correct: false},
            {text: 'Corper Abiola', correct: false},
            {text: 'Corper Philip', correct: true}

        ]
    },
    {
        question: "who is the Best AFCMF President of all time?",
        answers: [
            {text: 'Corper Etiano', correct: true},
            {text: 'Corper ID', correct: false},
            {text: 'Corper Abiola', correct: false},
            {text: 'Corper Philip', correct: false}

        ]
    },
    {
        question: "Treasure is all this except one?",
        answers: [
            {text: 'Pretty Lady', correct: false},
            {text: 'Musician', correct: false},
            {text: 'Gentle Girl', correct: true},
            {text: 'Nice Person', correct: false}

        ]
    },
    {
        question: "who is Mfon James?",
        answers: [
            {text: 'A Noble Doctor', correct: false},
            {text: 'A Lawyer', correct: false},
            {text: 'A writer', correct: true},
            {text: 'An Enterprenuer', correct: false}

        ]
    },
    {
        question: "who is Foluke?",
        answers: [
            {text: 'Banker', correct: false},
            {text: 'Enterprenuer', correct: false},
            {text: 'Teacher', correct: true},
            {text: 'Business Person', correct: false}

        ]
    },
    {
        question: "Should we use this Application For Childrens Day Quiz?",
        answers: [
            {text: 'Yes', correct: true},
            {text: 'No', correct: false}

        ]
    },
    {
        question: "Who is the most handsome male corper in AFCMF Sokoto?",
        answers: [
            {text: 'Abiola', correct: false},
            {text: 'Philip', correct: false},
            {text: 'Eyop', correct: true},
            {text: 'ID', correct: false}

        ]
    }
]
// console.log('export is here')
// // module.exports = questions
// export default questions