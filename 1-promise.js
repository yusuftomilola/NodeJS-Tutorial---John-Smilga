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

getText("./content/first.txtt")
  .then((result) => {
    return console.log(result);
  })
  .catch((error) => console.log(error));
