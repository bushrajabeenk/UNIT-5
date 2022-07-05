// const x = require("./test.js");
// console.log(x.sum(1, 2));

// const fs = require("fs");
// fs.readFile("./test.js", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

// console.log("last sentence in my program");

const path = require("path");
const fs = require("fs");
const dt = fs.readFile(path.join(".", "test.js"), { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// console.log("last sentence in my program");

// const os = require("os");
// console.log(os.cpus()[0]);
// console.log(os.version());

// REPL- READ, EVALUATE, PRINT, LOOP
