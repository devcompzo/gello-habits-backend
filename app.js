const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Gello Habits sample endpoint, listening port 3000");
});
