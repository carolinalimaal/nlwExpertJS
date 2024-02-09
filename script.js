const perguntas = [
    {
        pergunta: "1. Qual foi o primeiro console de videogame lançado no mercado?",
        respostas: [
            "Atari 2600",
            "Magnavox Odyssey",
            "Nintendo Entertainment System (NES)"
        ],
        correta: 1
    },
    {
        pergunta: "2. Em que ano foi lançado o icônico jogo 'Pong', considerado o primeiro jogo eletrônico de sucesso?",
        respostas: [
            "1972",
            "1980",
            "1968"
        ],
        correta: 0
    },
    {
        pergunta: "3. Qual foi o primeiro console a apresentar gráficos 3D poligonais, revolucionando a indústria dos videogames?",
        respostas: [
            "Nintendo 64",
            "PlayStation",
            "Sega Genesis"
        ],
        correta: 1
    },
    {
        pergunta: "4. Qual empresa lançou o console Game Boy, um dos primeiros consoles de videogame portáteis?",
        respostas: [
            "Nintendo",
            "Sony",
            "Sega"
        ],
        correta: 0
    },
    {
        pergunta: "5. Em que ano a Nintendo lançou o console Super Nintendo Entertainment System (SNES)?",
        respostas: [
            "1989",
            "1995",
            "1990"
        ],
        correta: 2
    },
    {
        pergunta: "6. Quem foi o criador do famoso personagem Mario, protagonista de 'Super Mario Bros.'?",
        respostas: [
            "Hideo Kojima",
            "Shigeru Miyamoto",
            "Yuji Naka"
        ],
        correta: 1
    },
    {
        pergunta: "7. Qual console popularizou o conceito de controles com sensores de movimento?",
        respostas: [
            "PlayStation 2",
            "Xbox 360",
            "Nintendo Wii"
        ],
        correta: 2
    },
    {
        pergunta: "8. Qual jogo é frequentemente considerado o pioneiro do gênero 'mundo aberto'?",
        respostas: [
            "Grand Theft Auto III",
            "The Legend of Zelda",
            "Super Mario 64"
        ],
        correta: 0
    },
    {
        pergunta: "9. Em que ano a Sony lançou o console PlayStation 2, um dos consoles mais vendidos da história?",
        respostas: [
            "1998",
            "2000",
            "2005"
        ],
        correta: 1
    },
    {
        pergunta: "10. Qual foi o primeiro jogo a utilizar discos ópticos como mídia de armazenamento?",
        respostas: [
            "Nintendo 64",
            "PlayStation",
            "Sega Saturn"
        ],
        correta: 2
    },
    {
        pergunta: "11. Qual foi o primeiro videogame a ser comercialmente lançado?",
        respostas: [
            "Pong",
            "Magnavox Odyssey",
            "Space Invaders"
        ],
        correta: 1
    },
    {
        pergunta: "12. Em que ano foi lançado o console Xbox, da Microsoft?",
        respostas: [
            "2001",
            "1998",
            "2005"
        ],
        correta: 0
    },
    {
        pergunta: "13. Qual jogo é frequentemente considerado o precursor dos jogos de corrida em perspectiva 3D?",
        respostas: [
            "Mario Kart",
            "Gran Turismo",
            "Out Run"
        ],
        correta: 2
    },
    {
        pergunta: "14. Qual foi o primeiro console a introduzir a função de multiplayer online?",
        respostas: [
            "Xbox Live",
            "PlayStation Network",
            "Nintendo Wi-Fi Connection"
        ],
        correta: 0
    },
    {
        pergunta: "15. Quem é conhecido como o 'pai do PlayStation', sendo uma figura chave no desenvolvimento do console?",
        respostas: [
            "Shigeru Miyamoto",
            "Hideo Kojima",
            "Ken Kutaragi"
        ],
        correta: 2
    }
];

// Para selecionar a div com o ID='quiz' 
const quiz = document.querySelector('#quiz')

// querySelector é uma função de pesquisa de seletores (tags, classes e ids)
const template = document.querySelector('template')

const corretas = new Set()

const totalDePerguntas = perguntas.length
const mostrarAcertos = document.querySelector('#acertos span')

// loop
for (let item of perguntas) {

    // cloneNode é uma função que vai clonar um nó (tags), se tiver TRUE dentro dos parenteses, clona tudo que estiver dentro dessa tag (filhos)
    const quizItem = template.content.cloneNode(true)

    // Para colocar cada pergunta
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas){

        //Para clonar o padrão para respostas
        const dt = quizItem.querySelector('dl dt').cloneNode(true)

        // Para mudar o texto da resposta
        dt.querySelector('label').textContent = resposta
        
        // Para mudar o for do label (Associar o FOR com o ID)
        dt.querySelector('label').setAttribute('for', 'pergunta-' + perguntas.indexOf(item) + '-resposta-' + item.respostas.indexOf(resposta))

        // Para mudar o id do input (Associar o FOR com o ID)
        dt.querySelector('input').setAttribute('id', 'pergunta-' + perguntas.indexOf(item) + '-resposta-' + item.respostas.indexOf(resposta))

        // Para mudar a referência (atributo name) de cada resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))

        // Para mudar o valor (atributo value) de cada resposta
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        // Para pegar o valor da resposta
        dt.querySelector('input').onchange = (event) => {
            // Valor da resposta: event.target.value

            // Para verificar se a resposta está correta
            const isRight = event.target.value == item.correta
            corretas.delete(item) // Deleta o item antes de verificar se está correto
            if (isRight) {
                // Se estiver correto, entra nessa condição e adiciona o item
                corretas.add(item)
            }
            // Para atualizar o número de acertos
            mostrarAcertos.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        // Para adicionar a resposta na tela
        quizItem.querySelector('dl').appendChild(dt)
    }

    // Para remover o template "Resposta A"
    quizItem.querySelector('dl dt').remove()


    // appendChild é uma função para colocar um filho, está colocando a pergunta na tela
    quiz.appendChild(quizItem)
}