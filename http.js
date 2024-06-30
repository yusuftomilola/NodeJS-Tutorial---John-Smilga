const http = require("http");

console.log(http);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our homepage sucker");
  }

  if (req.url === "/about") {
    res.write("About Page");
    res.end();
  } else {
    res.write(`
    <h1>oops!</h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href='/'>Go back home here</a>
    `);
    res.end();
  }
});

server.listen(5000);
