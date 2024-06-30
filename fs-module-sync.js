const fs = require("fs");
const {
  readFileSync,
  writeFileSync,
  appendFileSync,
  unlinkSync,
} = require("fs");
console.log(fs);

// reading files in 2 seperate files
const firstText = fs.readFileSync("./content/first.txt", "utf8");
const secondText = readFileSync("./content/subfolder/text.txt", "utf8");

console.log(firstText);
console.log(secondText);

// writing files in 2 seperate files
fs.writeFileSync(
  "./content/subfolder/combined.txt",
  `This is the combined text: [1] ${firstText}. [2] ${secondText}`
);

writeFileSync(
  "./content/third.txt",
  "This is the 3rd - third appended text file made happen due to the flag attribute",
  {
    flag: "a",
  }
);

// updating files in 2 seperate files
const contentToAppend = "This is the appended content";

appendFileSync("./content/subfolder/combined.txt", contentToAppend, "utf8");

// deleting files in 2 seperate files
unlinkSync("./content/text-to-unlink.txt"); // the file was created but was deleted by this method for sample purposes
