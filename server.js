var express = require('express');
var app = express();
const { urlencoded } = require('body-parser');

app.use(urlencoded('nome'));
 
app.get('/', function (req, res) {
    res.send('Bem-vindo!');
    
});
 
app.post('/usuarios', function (req, res) {
    res.send('<h1>Parabéns! Você preencheu o formulário</h1>');
    console.log(req.body)
});
 
app.listen(8080, function () {
    console.log(('Server on e porta aberta!'));

});