const { readFile, writeFile, appendFile, unlink } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (error, result) => {
      if (error) {
        reject(error);
        return;
      } else {
        resolve(result);
      }
    });
  });
};

const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/third.txt");
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();
