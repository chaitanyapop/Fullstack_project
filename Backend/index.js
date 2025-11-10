const express = require("express");

//creating express app here
const app = express();

//listening to the port
app.listen(4000, () => {
  console.log("listening on port 4000");
});

//routes
app.get("/", (req, res) => {
  res.json({ message: "User made the get req" });
});
