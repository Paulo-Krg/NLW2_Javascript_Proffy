const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// servidor
const express = require('express');
const server = express();

// configurar nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
    .use(express.urlencoded({extended: true})) //receber os dados do req.body
    .use(express.static('public'))  // configura a pasta com os arquivos publicos estaticos
    .get("/", pageLanding)  // configura as rotas da aplicacao
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(3333)   // configura a porta