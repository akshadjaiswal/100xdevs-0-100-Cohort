const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("GET is working");
});
app.post("/health-checkup", (req, res) => {
  const kidenys = req.body.kidenys;
  const kidenyLength = kidenys.length;

  res.send("You  have " + kidenyLength + " kidenys");
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
