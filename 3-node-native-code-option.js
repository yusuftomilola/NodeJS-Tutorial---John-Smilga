const fs = require("fs");
const util = require("util");

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFilePromise(
      "./content/subfolder/text.txt",
      "utf8"
    );

    const joined = `${first} || ${second}`;

    await writeFilePromise("./content/node-native-text.txt", joined, "utf8");

    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();
