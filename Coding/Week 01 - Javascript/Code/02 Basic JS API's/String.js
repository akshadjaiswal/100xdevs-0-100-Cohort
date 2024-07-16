//String

function getLength(str) {
  console.log("Original String :" + str);
  let length = str.length;
  console.log("Length of String:" + length);
}
getLength("Akshad");

function findIndexOf(str, target) {
  console.log("Original String :" + str);
  let indexOftarget = str.indexOf(target);
  console.log(indexOftarget);
}
findIndexOf("Hello Akshad", "Akshad");

function findLastIndexOf(str, target) {
  console.log("Original String :" + str);
  let lastIndexOftarget = str.lastIndexOf(target);
  console.log("Index:" + lastIndexOftarget);
}
findLastIndexOf("Hello Akshad Akshad", "Akshad");

function getSlice(str, start, end) {
  console.log("Original String :" + str);
  let slicedString = str.slice(start, end);
  console.log("Sliced String:" + slicedString);
}
getSlice("Akshad", 0, 3);

function getSubString(str, start, end) {
  console.log("Original String :" + str);
  let subString = str.substr(start, end);
  console.log(subString);
}
getSubString("Akshad", 0, 3);

function replaceString(str, target, replacement) {
  console.log("Original String:" + str);
  let replacedString = str.replace(target, replacement);
  console.log("replaced String :" + replacedString);
}
replaceString("Hello Akshad", "Akshad", "Aaradhana");

function splitString(str, seperator) {
  console.log("Original String:" + str);
  let splittedString = str.split(seperator);
  console.log("String after split:" + splittedString);
}
splitString("Akshad  Jaiswal", " ");

function trimString(str) {
  console.log("Original String:" + str);
  console.log("Trimmed string:" + str.trim());
}
trimString("  akshad  jaiswal  s");

function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");
