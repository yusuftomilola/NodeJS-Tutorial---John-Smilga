const fs = require("fs");

for (let i = 0; i < 100000; i++) {
  fs.writeFileSync("./content/streams.txt", `Hello world ${i} \n`, {
    flag: "a",
  });
}
