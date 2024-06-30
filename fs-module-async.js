const fs = require("fs");

const { readFile, writeFile, appendFile, unlink } = require("fs");

// using the async read file method to read content in a file
fs.readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result);
  const asyncFirstText = result;

  readFile("./content/subfolder/text.txt", "utf8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
    const asyncSecondText = data;

    const combinedAsyncText = `This is the combined Async texts: ${asyncFirstText}... ${asyncSecondText}`;

    fs.writeFile(
      "./content/subfolder/combined.txt",
      combinedAsyncText,
      "utf8",
      (error) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log("The async file has been writen successfully!");
      }
    );
  });
});

// using the async write file method to append content in a file

const appendContentAsync = "This is THE content to be appended asynchorinously";
appendFile("./content/first.txt", appendContentAsync, "utf8", (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("content APPENDED successfully");
});

// using the async unlink file method to delete a file
fs.unlink("./content/subfolder/deleteMe.txt", (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("File deleted successfully");
});
