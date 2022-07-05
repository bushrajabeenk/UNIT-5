const express = require("express");
const app = express();

// part-1
// app.use((req, res, next) => {
// console.log("a");
// next();
// console.log("b");
// });

// app.use((req, res, next) => {
//   console.log("c");
//   next();
//   console.log("d");
// });

// app.get("/", (req, res) => {
//   console.log("Hello");
//   res.send("hello");
// });

// app.get("/home", (req, res) => {
//   console.log("You are in the home page");
//   res.send("Homepage");
// });

// app.listen(4500, () => {
//   console.log("Server started");
// });

//part-2
const checkPerformanceMiddleware = (req, res, next) => {
  console.log(performance.now());
  next();
  console.log(performance.now());
};
app.use(checkPerformanceMiddleware);

const func2 = (req, res, next) => {
  //console.log(req.query);
  if (req.query.q === "masai") {
    console.log("access");
    res.send("access");
    next();
  } else {
    console.log("error");
    res.send("error");
  }
};
app.use(func2);

app.get("/", (req, res) => {
  console.log("Hello");
  res.send("hello");
});

app.get("/home", (req, res) => {
  console.log("You are in the home page");
  res.send("Homepage");
});

//part-3
// const dnsRoutes = require("./routes/dns.routes");
// const prodRoutes = require("./routes/prod.routes");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.text());

// app.use(express.json());

// app.use("/dns", dnsRoutes);

// app.use("/products", prodRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.listen(4500, () => {
  console.log("Server started");
});
