//if this is an array of number with aleats 1 input , trturn true else false
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
const zod = require("zod");
function validateInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });
  const response = schema.safeParse(obj);
  console.log(response);
}
// validateInput({
//   email: "akshadsantoshjaiswal@gmail.com",
//   password: "12345678",
// });
app.post("/signUp", (req, res) => {
  const response1 = validateInput(req.body);
  res.json({
    msg: "Valid Inputs",
  });
});
app.listen(port, () => {
  console.log("App is starting on port " + port);
});
