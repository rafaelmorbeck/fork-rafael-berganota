const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();
PORT=8080

app.engine('html', mustacheExpress());
app.set('view-engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index.html');
})

app.get('/cadastro', (req, res) => {
    res.render('cadastro.html');
})

app.get('/inicio', (req, res) => {
    res.render('inicio.html');
})

app.get('/perfil', (req, res) => {
    res.render('profile.html');
})

app.get('/teste', (req, res) => {
    res.render('teste.html');
})


app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`))