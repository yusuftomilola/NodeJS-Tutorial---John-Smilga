const fs = require("fs").promises;

const start = async () => {
  try {
    const first = await fs.readFile("./content/first.txt", "utf8");
    const second = await fs.readFile("./content/subfolder/text.txt", "utf8");

    const joined = `${first} || ${second}`;

    await fs.writeFile("./content/node-native-text.txt", joined, {
      flag: "a",
    });

    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();
