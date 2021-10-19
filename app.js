const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Woaarld');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

});

server.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns<h1>')


});
    