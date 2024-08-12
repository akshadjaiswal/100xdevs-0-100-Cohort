const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.get("/home", (req, res) => {
  res.send("Akshad");
});
app.get("/", (req, res) => {
  res.send("Main Page");
});
app.post("/api", (req, res) => {
  console.log(req.query.message);
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on the port ${port}`);
});
