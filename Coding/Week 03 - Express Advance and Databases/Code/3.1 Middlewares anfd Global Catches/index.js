const express = require("express");
const app = express();
const port = 3000;

app.get("/health-checkup", (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "Akshad" || password != "999") {
    res.status(403).json({
      msg: "User invalid",
    });
    return;
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg: "Wrong inputs",
    });
    return;
  }
  res.send("Your are healthy");
});

app.put("/replace-kidney", (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "Akshad" || password != "999") {
    res.status(403).json({
      msg: "User invalid",
    });
    return;
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg: "Wrong inputs",
    });
    return;
  }
  res.send("Healthy");
});

app.listen(port, () => {
  console.log(`App is running on port ` + port);
});
