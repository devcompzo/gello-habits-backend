const express = require("express");

const app = express();
const db = require("./database");

db.authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

app.get("/", (req, res) => {
  res.send("Hello world!");
});

db.sync()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("Gello Habits sample endpoint, listening port 3000");
    });
  })
  .catch((err) => console.log("Error: " + err));
