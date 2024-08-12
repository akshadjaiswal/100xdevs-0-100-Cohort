const express = require("express");
const port = 3000;
function calculateSum1(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = ans + i;
  }
  return ans;
}
function calculateSum2(a, b) {
  return a + b;
}
const app = express();
app.get("/", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const add = calculateSum2(a, b);
  const n = req.query.n;
  const ans = calculateSum1(n);
  //   res.send(ans.toString());
  res.json({ result: add });
});
app.listen(port, () => {
  console.log(`Example app listening on the port ${port}`);
});
