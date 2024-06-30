const http = require("http");

// Using the Events Emitter API
const server = http.createServer();

server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen(5000);
