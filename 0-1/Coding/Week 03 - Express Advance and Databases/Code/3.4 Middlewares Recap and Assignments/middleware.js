const express = require("express");
const app = express();

function ticketChecker(req, res, next) {
  const ticket = req.query.ticket;
  if (ticket === "free") {
    next();
  } else {
    res.json({
      msg: "Access Denied",
    });
  }
}

function isOldEnough(req, res, next) {
  const age = req.query.age;
  if (age >= 15) {
    next();
  } else {
    res.json({
      msg: "Not a valid age",
    });
  }
}

app.use(ticketChecker, isOldEnough);

app.get("/ride1", (req, res) => {
  res.send("You rode the first ride");
});
app.get("/ride2", (req, res) => {
  res.send("You rode the second ride");
});
app.get("/ride3", (req, res) => {
  res.send("You rode the third ride");
});
app.listen(3000, () => {
  console.log("App running on port 3000");
});
