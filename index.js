const express = require('express');
const mustacheExpress = require('mustache-express');
const berganotaRouters = require('./routes/berganotaRoutes');

const app = express();
PORT=8080

app.engine('html', mustacheExpress());
app.set('view-engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.use('/', berganotaRouters);

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`))