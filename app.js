const http = require('http');
const port = process.env.PORT || 80;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello from Wild Rydes Fargate App!");
});

server.listen(port, () => {
  console.log("Server running on port " + port);
});
