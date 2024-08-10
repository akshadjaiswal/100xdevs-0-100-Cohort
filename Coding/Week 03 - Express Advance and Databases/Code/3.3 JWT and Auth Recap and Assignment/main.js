const jwt = require("jsonwebtoken");

const data = {
  name: "Akshad Jaiswal",
  email: "akshad@gmail.com",
  nickname: "Mint",
};
const token = jwt.sign(data, "9999");
console.log(token)

const decode= jwt.verify(token, "9999")
console.log(decode)