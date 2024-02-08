const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação para estilização de páginas web.",
            "Uma linguagem de programação para criação de layouts responsivos.",
            "Uma linguagem de programação para desenvolvimento de páginas web interativas."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Comparação de valores sem verificar o tipo.",
            "Comparação de valores e tipos de dados.",
            "Concatenação de strings."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "variable x = 5;",
            "let x = 5;",
            "const x = 5;"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o método utilizado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "add()",
            "push()",
            "append()"
        ],
        correta: 1
    },
    {
        pergunta: "Como se referencia um elemento HTML utilizando JavaScript?",
        respostas: [
            "getElementById()",
            "selectElement()",
            "findElement()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '&&' em JavaScript?",
        respostas: [
            "Operador de comparação.",
            "Operador de atribuição.",
            "Operador lógico 'E' (AND)."
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma função de callback em JavaScript?",
        respostas: [
            "Uma função que retorna um valor booleano.",
            "Uma função passada como argumento para outra função.",
            "Uma função que faz chamadas recursivas."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o método utilizado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "remove()",
            "deleteLast()"
        ],
        correta: 0
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Um estilo de codificação em JavaScript.",
            "Uma técnica para criptografar dados em JavaScript.",
            "Uma interface de programação para interagir com elementos HTML."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a forma correta de escrever um comentário de linha única em JavaScript?",
        respostas: [
            "// Este é um comentário de linha única.",
            "<!-- Este é um comentário de linha única. -->",
            "/* Este é um comentário de linha única. */"
        ],
        correta: 0
    }
];

// Para selecionar a div com o ID='quiz' 
const quiz = document.querySelector('#quiz')

// querySelector é uma função de pesquisa de seletores (tags, classes e ids)
const template = document.querySelector('template')



// loop
for (let item of perguntas) {

    // cloneNode é uma função que vai clonar um nó (tags), se tiver TRUE dentro dos parenteses, clona tudo que estiver dentro dessa tag (filhos)
    const quizItem = template.content.cloneNode(true)

    // Para colocar cada pergunta
    quizItem.querySelector('h2').textContent = item.pergunta

    for (let resposta of item.respostas){

        //Para clonar o padrão para respostas
        const subItem = quizItem.querySelector('dl dt').cloneNode(true)

        // Para mudar o texto da resposta
        subItem.querySelector('span').textContent = resposta

        // Para adicionar a resposta na tela
        quizItem.querySelector('dl').appendChild(subItem)
    }

    // Para remover o template "Resposta A"
    quizItem.querySelector('dl dt').remove()


    // appendChild é uma função para colocar um filho, está colocando a pergunta na tela
    quiz.appendChild(quizItem)
}