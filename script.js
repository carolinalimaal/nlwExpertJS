const quizData = [
    {
        question: '1. Qual foi o primeiro videogame comercialmente bem-sucedido?',
        options: [
            'Pong',
            'Space Invaders',
            'Pac-Man',
            'Tetris'
        ],
        correct: 0
    },
    {
        question: '2. Qual console foi lançado em 1985, revolucionando a indústria dos videogames?',
        options: [
            'Sega Genesis',
            'Atari 2600',
            'Nintendo Entertainment System (NES)',
            'PlayStation 1'
        ],
        correct: 2
    },
    {
        question: '3. Qual foi o primeiro console de videogame lançado?',
        options: [
            'Atari 2600',
            'Magnavox Odyssey',
            'Nintendo 64',
            'Sega Master System'
        ],
        correct: 1
    },
    {
        question: '4. Quem é considerado o "pai dos videogames"?',
        options: [
            'Shigeru Miyamoto',
            'Nolan Bushnell',
            'Hideo Kojima',
            'Sid Meier'
        ],
        correct: 1
    },
    {
        question: '5. Qual foi o primeiro jogo de sucesso comercial para PC?',
        options: [
            'Doom',
            'Myst',
            'Wolfenstein 3D',
            'Zork'
        ],
        correct: 3
    },
    {
        question: '6. Qual foi o primeiro console de 16 bits?',
        options: [
            'Sega Genesis',
            'Super Nintendo Entertainment System (SNES)',
            'Atari Jaguar',
            'TurboGrafx-16'
        ],
        correct: 0
    },
    {
        question: '7. Qual foi o primeiro console a apresentar gráficos 3D?',
        options: [
            'Sega Saturn',
            'PlayStation 1',
            'Nintendo 64',
            '3DO Interactive Multiplayer'
        ],
        correct: 2
    },
    {
        question: '8. Qual jogo popular foi lançado em 1989 para o Game Boy da Nintendo?',
        options: [
            'Tetris',
            'Super Mario Bros.',
            'The Legend of Zelda',
            'Metroid'
        ],
        correct: 0
    },
    {
        question: '9. Em que ano a empresa Sony lançou o console PlayStation?',
        options: [
            '2000',
            '1998',
            '1994',
            '2001'
        ],
        correct: 2
    },
    {
        question: '10. Qual foi o primeiro videogame a ser jogado em rede?',
        options: [
            'Doom',
            'Quake',
            'Counter-Strike',
            'World of Warcraft'
        ],
        correct: 0
    },
    {
        question: '11. Quem desenvolveu o jogo "Super Mario Bros."?',
        options: [
            'Shigeru Miyamoto',
            'Hideo Kojima',
            'Yuji Naka',
            'Tim Schafer'
        ],
        correct: 0
    },
    {
        question: '12. Qual foi o primeiro console a utilizar CDs para jogos?',
        options: [
            'PlayStation 1',
            'Sega CD',
            'TurboGrafx-CD',
            '3DO Interactive Multiplayer'
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
    {
        question: '14. Qual foi o primeiro jogo de RPG lançado?',
        options: [
            'Dragon Quest',
            'Final Fantasy',
            'Wizardry',
            'Ultima'
        ],
        correct: 3
    },
    {
        question: '15. Qual foi o primeiro console a introduzir um controle com analógico?',
        options: [
            'Nintendo 64',
            'PlayStation 1',
            'Sega Dreamcast',
            'Xbox'
        ],
        correct: 0
    }
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
        // Para atribuir um ID
        optionBtn.id = 'option'
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

    disableOptions()

    if (selectedOption == quizData[currentQuestion].correct) {
        score++
        feedbackElement.innerText = 'CORRECT!'
        feedbackElement.classList.add('mensage-feedback-correct')
    } else {
        feedbackElement.innerText = 'WRONG!'
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
            quizContainer.innerHTML = ''

            const yourScore = document.createElement('h2')
            yourScore.classList.add('score')
            yourScore.textContent = `YOUR SCORE ${score} / ${totalQuestions}`

            const resertBtn = document.createElement('button')
            resertBtn.classList.add('restartBtn')
            resertBtn.textContent = 'RESTART'

            quizContainer.appendChild(yourScore)
            quizContainer.appendChild(resertBtn)
        })
    }
}

function disableOptions() {
    const optionBtn = document.querySelectorAll('#option')
    for (item of optionBtn){
        item.setAttribute('disabled', '')
    }
}

function reloadQuiz() {
    location.reload();
}


displayQuestion()