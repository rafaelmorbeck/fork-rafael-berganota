const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();
PORT=8080

app.engine('html', mustacheExpress());
app.set('view-engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("oi");
})


app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`))