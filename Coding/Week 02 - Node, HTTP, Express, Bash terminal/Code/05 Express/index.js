const express = require("express");
const app = express();
app.use(express.json())
const users = [
  {
    name: "Akshad",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
      {
        healthy: true,
      },
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const akshadKidney = users[0].kidneys;
  const noOfKidneys = users[0].kidneys.length;
  //   console.log(akshadKidney);
  //   console.log(noOfKidneys);
  let noOfHealthyKidneys = 0;
  for (let i = 0; i < akshadKidney.length; i++) {
    if (akshadKidney[i].healthy) {
      noOfHealthyKidneys = noOfHealthyKidneys + 1;
    }
  }
  const noOfUnhealthyKidney = noOfKidneys - noOfHealthyKidneys;
  console.table({ noOfKidneys, noOfHealthyKidneys, noOfUnhealthyKidney });
  res.json({
    // akshadKidney,
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidney,
  });
  //   res.send(
  //     "<h1>Akshad Kidneys:</h1>" +
  //       akshadKidney +
  //       "<h1>Number of kidneys:</h1>" +
  //       noOfKidneys
  //   );
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done",
  });
});

app.put("/", (req, res) => {});

app.delete("/", (req, res) => {});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
