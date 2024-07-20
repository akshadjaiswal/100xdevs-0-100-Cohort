const fs = require("fs");
const { resolve } = require("path");

function akshadReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("Akshad.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

akshadReadFile().then(onDone);
