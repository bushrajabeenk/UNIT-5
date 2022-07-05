const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   res.write("Hello World");
  //   res.end("!!");
  // if we don't write res.end it keeps on listening / keeps loading/ after 5minutes it shows error

  // ----------------------------------------------------

  // passing data as chunks of data
  //   res.write("H");
  //   res.write("el");
  //   res.write("lo World, how are you");
  //   res.end("!");

  //   --------------------------------------------------

  // sending ui to browser
  //   res.setHeader("content-type", "application/json");
  //   res.setHeader("content-type", "text/html");
  //   res.end("<h1>Hello</h1>");
  //   res.setHeader("content-type", "text/plain");
  //   res.end("[1, 2, 3, 4, 5]");

  //-------------------------------

  if (req.url === "/") {
    return res.end("Homepage");
  }

  if (req.url === "/products") {
    res.setHeader("content-type", "application/json");
    return res.end(JSON.stringify([1, 2, 3, 4]));
  }

  //   if (req.url === "/file") {
  //     const data = fs.readFileSync("./test.txt", { encoding: "utf-8" });
  //     return res.end(data);
  //     until file reading is done, we are not sending the data
  //   }

  if (req.url === "/file") {
    fs.readFile("./test.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.end(data);
    });
    //here we don't wait for another request, it is reading the file,
    //as soon as it finishes reading, it then directly sends data.
  }

  if (req.url === "/flipkart") {
    fs.readFile("./index.html", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.setHeader("content-type", "text/html");
      res.end(data);
    });
  }

  // stream is for reading data in chunks, instead of larger files directly
  if (req.url === "/stream") {
    const readStream = fs.createReadStream("./test.txt");
    readStream.pipe(res);
  }
  // earlier for larger files, chunksof data was sent in less quantity/ less requests
  // because of stream, we are able to handle/send more number of requests
  // when you check response headers, we get data in chunks
  // by benchmarking, we can decide whether or not to use stream/send data in chuncks
  // continuous data - huge data broken down into chunks of data

});

server.listen(8000, () => {
  console.log("Server started on 8000");
});
