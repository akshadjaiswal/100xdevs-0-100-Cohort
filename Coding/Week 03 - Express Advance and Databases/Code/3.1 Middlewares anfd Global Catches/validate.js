//if this is an array of number with aleats 1 input , trturn true else false
const zod = require("zod");
function validateInput(arr) {
  const schema = zod.array(zod.number());
  const response = schema.safeParse(arr);
  console.log(response)
}
// console.log(validateInput(["Akshad"]));
validateInput([1,2,3])
