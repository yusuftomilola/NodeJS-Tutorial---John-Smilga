const fs = require("fs");

// default size is 64kb
// use the options object - highWaterMark to control the size
// last buffer - remainder
// {encoding: 'utf8,
// highWaterMark: 90000} - 90kb

const readableStream = fs.createReadStream("../content/streams.txt", {
  highWaterMark: 30000,
  encoding: "utf8",
});

readableStream.on("data", (chunk) => {
  console.log(`Recieved Chunk: ${chunk}`);
});

readableStream.on("end", () => {
  console.log("Finished reading the file");
});

readableStream.on("error", (error) => {
  console.log(error);
});
