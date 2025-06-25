const express = require('express');
const app = express();
PORT=8080

app.get('/', (req, res) => {
    res.send("oi");
})


app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`))