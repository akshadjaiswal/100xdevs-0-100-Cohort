const express = require("express");
const app = express();
const port = 3000;

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "Akshad" || password != "999") {
    res.status(403).json({
      msg: "User invalid",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg: "Wrong inputs",
    });
  } else {
    next();
  }
}
app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("Your are healthy");
});

app.put("/replace-kidney", kidneyMiddleware, (req, res) => {
  res.send("Healthy");
});

app.listen(port, () => {
  console.log(`App is running on port ` + port);
});
