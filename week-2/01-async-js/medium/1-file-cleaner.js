const fs = require("fs");

const PATH = "1-file-cleaner.txt";

fs.readFile(PATH, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  const cleanedContent = data.replace(/\s+/g, " ");
  fs.writeFile(PATH, cleanedContent, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(cleanedContent);
  });
});
