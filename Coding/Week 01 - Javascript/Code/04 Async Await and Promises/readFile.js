const fs = require("fs");

fs.readFile("Akshad.txt", "utf-8", function (err, data) {
  console.log(err);
  console.log(data);
});
