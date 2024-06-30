const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // res.write(fs.readFileSync("./content/streams.txt", "utf8"));
    // res.end();

    const fileStream = fs.createReadStream("./content/streams.txt", "utf8");

    fileStream.on("open", () => {
      fileStream.pipe(res);
    });

    fileStream.on("error", (error) => {
      res.end(error);
    });
  } else {
    res.write(`
        <h1>Oops!</h1>
        <p>Page not found</p>
        `);
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Listening at Port 5000...");
});
