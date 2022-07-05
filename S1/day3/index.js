const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("Welcome to homepage");
});

app.get("/numbers", (req, res) => {
  res.end(JSON.stringify([1, 2, 3, 4, 5]));
});

app.get("/alphabets", (req, res) => {
  res.send(["a", "b", "c", "d", "e"]);
  // without worrying about data types, res.send
});

app.get("/htmlres", (req, res) => {
  res.send("<h1>Heyy!</h1>");
});

app.post("/products", (req, res) => {
  res.end(JSON.stringify([1, 2, 3, 4, 5]));
});

app.listen(8000, () => {
  console.log("Server started on 8000");
});
