const path = require("path");

// The assigned separator for our system
console.log(path.sep);

// joining various folder names and file names
const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

// basename of current file path
const baseName = path.basename(filePath);
console.log(baseName);

// returning an absolute path
const absolutePath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "text.txt"
);
console.log(absolutePath);
