-> npm init
-> npm install
-> npm i express

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(8080, () => {
  console.log("Server listening at port 8080");
});
