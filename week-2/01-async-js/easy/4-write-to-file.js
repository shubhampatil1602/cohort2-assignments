const fs = require("fs");

const path = "4-write-to-file.txt";

const data = "Async task: Writing data from js file... ";

fs.writeFile(path, data, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
