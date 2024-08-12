console.log("Akshad");
//Variables
var b = 2;
const a = 1;
console.log(a);
console.log(b);
console.log("----------------------------");
// data types
let firstName = "Akshad";
let age = 21;
let isMarried = false;

console.log("This boyname is " + firstName + " and his age is " + age);
console.log("------------------------------------------------------------");
//if else

if (isMarried == true) {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " is not married yet");
}
console.log("----------------------------");
let gender = "Male";
if (gender === "Male") {
  console.log("welcome gentleman");
} else {
  console.log("Not a male");
}
console.log("----------------------------");
//loops
let answer = 0;
for (let i = 0; i <= 1000; i++) {
  answer = answer + i;
}
console.log(answer);
console.log("----------------------------");
//arrays
//print all even numbers in arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
}
console.log("----------------------------------");
//print biggest number in array
let biggestNumber = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > biggestNumber) {
    biggestNumber = numbers[i];
  }
}
console.log(biggestNumber);
console.log("------------------------------------");

const personsArray = ["akshad", "Akshita", "harshit", "mohit"];
const gendersArray = ["male", "female", "male", "male"];

for (let i = 0; i < personsArray.length; i++) {
  if (gendersArray[i] == "male") {
    console.log(personsArray[i]);
  }
}
console.log("------------------------------------");
//objects

const user1 = {
  firstName: "akshad",
  gender: "Male",
};
console.log(user1["firstName"]);
console.log(user1["gender"]);

console.log("------------------------------------");
//array of objects
const allUsers = [
  {
    firstName: "Akshad",
    gender: "Male",
  },
  {
    firstName: "Harshit",
    gender: "Male",
  },
  {
    firstName: "Akshita",
    gender: "Female",
  },
];
// console.log(allUsers);

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["gender"] == "Male") {
    console.log(allUsers[i]["firstName"]);
  }
}
console.log("------------------------------------");
// Program that reverse all elemets in the array
const arr = [1, 2, 3, 4, 5];
const reversedArr = [];
// console.log(arr.length)
for (let i = arr.length - 1; i >= 0; i--) {
  const valueAtIndex = arr[i];
  reversedArr.push(valueAtIndex);
}
console.log("array:" + arr);
console.log("Revered arry:" + reversedArr);
console.log("------------------------------------");

//functions
function sum(a, b, fun) {
  let result = a + b;
  fun(result);
}
function displayResult(data) {
  console.log("Result of sum is " + data);
}
function displayPassiveResult(data) {
  console.log("Sums result is :" + data);
}

sum(1, 2, displayResult);
sum(1, 2, displayPassiveResult);
console.log("------------------------------------");

function calculateAruthmetic(a, b, type) {
  const ans = type(a, b);
  return ans;
}

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

console.log(calculateAruthmetic(1, 2, sum));
console.log("------------------------------------");
setTimeout(() => {
  console.log("hlo");
}, 2000);

console.log("------------------------------------");
function counter() {
  for (i = 30; i >= 0; i--) {
    console.log(i);
  }
}
// counter()
setTimeout(counter, 1000);
