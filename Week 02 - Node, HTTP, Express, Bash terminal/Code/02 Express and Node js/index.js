const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send('<b>Hello World</b>');
  // res.send("Hello World");
});

app.post("/conversation", (req, res) => {
  res.send('<b>Conversation </b>');
  // res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on the port ${port}`);
});
