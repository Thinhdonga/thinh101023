const http = require('node:http');
http
 const server = http.createServer((request, response) => {
  response.writeHead(200,{"content-Type":"text/html; charset=utf-8"});
  response.write("Hello");
  response.end();
  })
  .listen(8080);