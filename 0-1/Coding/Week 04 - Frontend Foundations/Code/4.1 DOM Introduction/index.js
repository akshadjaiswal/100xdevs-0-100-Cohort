const express = require("express");
const app = express();

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const ans = a + b;
  res.send(ans.toString());
});
app.listen(3000 , ()=>{
  console.log("Server running on port 3000")
})
