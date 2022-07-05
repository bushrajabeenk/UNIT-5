const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello");
  }
  if (req.url === "/quiz") {
    res.setHeader("content-type", "text/html");
    // to define the type of data, if it is json, html, txt file etc
    fs.readFile("./quiz.html", { encoding: "utf-8" }, (err, data) => {
      // if (err) throw err;
      // res.end(data);
      res.write(data);
      res.end();
    });
  }
  if (req.url === "/file") {
    fs.readFile("./Quiz.txt", { encoding: "utf-8" }, (err, data) => {
      // if (err) throw err;
      // res.end(data);
      res.write(data);
      res.end("Bye");
    });
  }
});

// const server = http.createServer((req, res) => {
//   if (req.url === "/quiz") {
//     res.end("quiz goes here");
//   }
//   if (req.url === "/file") {
//     const data = fs.readFileSync("./Quiz.txt", { encoding: "utf-8" });
//     res.write(data);
//   }
//   res.end("Bye");
// });

server.listen(8080, () => {
  console.log("Server started");
});

// autocannon - it is automatically firing a request to check how much/ how many requests a server can handle
