// create web server
const http = require('https://');
const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});
server.listen(3000);
