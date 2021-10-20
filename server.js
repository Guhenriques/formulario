var express = require('express');
var app = express();
const { urlencoded } = require('body-parser');

app.use(urlencoded('nome'));
 
app.get('/', function (req, res) {
    res.send('Bem-vindo!');
    
});
 
app.post('/usuarios', function (req, res) {
    res.send('<h1>Parabéns! Usuário incluído</h1>');
    console.log(req.body)
});

app.post('/usuarios/:id', function (req, res) {
    res.send('<h1>Parabéns! Usuário alterado</h1>');
    console.log(req.body)
    console.log(req.params.id) 
});
 
app.listen(3003, function () {
    console.log(('Server on e porta aberta!'));

});