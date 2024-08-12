const express = require("express");
const app = express();
const zod = require("zod");
const port = 3000;
const schema = zod.array(zod.number());
// {
//     email: String
//     password: number
//     country:'IN' 'US'
// }
const schema2 = zod.object({
  email: zod.string(),
  password: zod.string(),
  kidenys: zod.array(zod.number()),
});

app.use(express.json());
app.get("/", (req, res) => {
  res.send("GET is working");
});
app.post("/health-checkup", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const kidenys = req.body.kidenys;
  const response = schema.safeParse(kidenys);
  //   if (!response.success) {
  //     res.status(411).json({
  //       msg: "Please give the valid inputs",
  //     });
  //   } else {
  // }
  res.send({
    response,
  });
  console.log(response);
});
app.use((err, req, res, next) => {
  // console.log(err)
  res.json({
    message: "Sorry Something went wrong with our server ",
  });
});
app.listen(port, () => {
  console.log("App is running on port " + port);
});
