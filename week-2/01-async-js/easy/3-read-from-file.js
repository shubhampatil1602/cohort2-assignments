const fs = require("fs");
const path = "3-read-from-file.txt";

fs.readFile(path, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);

  const content = data + "\nJAY HANUMAN DADA 🙏🏼🙏🏼";

  fs.writeFile(path, content, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("file written successful");
  });

  console.log("Starting the expensive operation...");
  setTimeout(() => {
    console.log("End of expensive operation...");
  }, 3000);
});
