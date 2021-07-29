const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "89987654534",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Daniel evangelista",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "89987654534",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
]

const express = require('express');
const server = express();

// configurar nunjucks
// const nunjucks = require('nunjucks');
// nunjucks.configure('src/views', {
//     express: server,
//     noCache: true,
// })

// Associa o nome de uma rota a um arquivo HTML
function pageLanding(req, res) {
    return res.sendFile(__dirname + "/views/index.html");
}

function pageStudy(req, res) {
    return res.sendFile(__dirname + "/views/study.html");
}

function pageGiveClasses(req, res) {
    return res.sendFile(__dirname + "/views/give-classes.html");
}

server
.use(express.static('public'))  // configura a pasta com os arquivos publicos estaticos
.get("/", pageLanding)  // configura as rotas da aplicacao
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(3333)   // configura a porta