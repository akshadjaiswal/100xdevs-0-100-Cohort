const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://akshadsantoshjaiswal:rFw7NSxncTpSc7Bq@cluster0.yulixmn.mongodb.net/users_app?"
);

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

const app = express();
app.use(express.json());
app.post("/signup", async function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(400).send("User Already Exist");
  }

  const user = new User({
    name: name,
    email: email,
    password: password,
  });

  user.save().then(() => {
    console.log("Inserted ")
  });

  res.json({
    msg: "User created ",
  });
});
app.get("/", (req, res) => {
  res.send("Working")
})

app.listen(3000, () => {
  console.log("App running on port 3000");
});
