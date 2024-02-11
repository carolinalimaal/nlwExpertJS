const quizData = [
    {
        question: 'Quando foi lançado o primeiro videogame comercialmente bem-sucedido, o Pong?',
        options: [
            '1968',
            '1972',
            '1976',
            '1980'
        ],
        correct: 1
    },
    {
        question: 'Qual foi o primeiro console de videogame lançado no mercado?',
        options: [
            'Atari 2600',
            'Magnavox Odyssey',
            'Nintendo Entertainment System (NES)',
            'Sega Genesis'
        ],
        correct: 1
    },
    {
        question: 'Quando foi lançado o primeiro console de videogame portátil, o Nintendo Game Boy?',
        options: [
            '1980',
            '1985',
            '1989',
            '1995'
        ],
        correct: 2
    },

]

const quizContainer = document.getElementById('quiz')
const questionElement = document.getElementById('question')
const optionsElement = document.getElementById('options')
const feedbackElement = document.getElementById('feedback')
const nextElement = document.getElementById('next-btn')

const totalQuestions = quizData.length
let currentQuestion = 0
let score = 0

function displayQuestion() {
    const currentQuizData = quizData[currentQuestion]

    questionElement.innerText = currentQuizData.question

    optionsElement.innerHTML = ''
    feedbackElement.innerHTML = ''
    
    for (option of currentQuizData.options) {
        // Para criar o elemento botão
        const optionBtn = document.createElement('button')
        // Para adicionar uma classe CSS para estilizar depois
        optionBtn.classList.add('optionBtn')
        // Para adicionar ação ao botão
        optionBtn.addEventListener('click', selectOption)
        // Para modificar o texto da alternativa (parte visível)
        optionBtn.innerText = option
        // Para modificar o valor da alternativa (parte responsável pela comparação com a correta)
        optionBtn.value = currentQuizData.options.indexOf(option)
        // Para adicionar a opção na tela
        optionsElement.appendChild(optionBtn)
    }
}


function selectOption(event) {
    // Para pegar o valor da opção selecionada
    const selectedOption = event.target.value

    if (selectedOption == quizData[currentQuestion].correct) {
        score++
        feedbackElement.innerText = 'Correct!'
        feedbackElement.classList.add('mensage-feedback-correct')
    } else {
        feedbackElement.innerText = 'Wrong!'
        feedbackElement.classList.add('mensage-feedback-wrong')
    }
    currentQuestion++
    if (currentQuestion < totalQuestions) {
        nextElement.addEventListener('click', () => {
            feedbackElement.classList.remove('mensage-feedback-wrong')
            feedbackElement.classList.remove('mensage-feedback-correct')        
            displayQuestion()
        })

    } else {
        nextElement.addEventListener('click', () => {
            quizContainer.innerHTML = `<h2 class="score"> YOUR SCORE ${score} / ${totalQuestions}</h2> <button class="restartBtn">RESTART</button>`
            
        })
    }
}

displayQuestion()
