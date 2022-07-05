const express = require("express");

const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

//method + route

// ------------------------------------------------------------------------------------------------------------------

app.get("/", (req, res) => {
  //   res.write("Hello");
  //   res.end();
  // instead of write + end, express has only one, res.send
  res.send("Hello");
});

app.get("/products", (req, res) => {
  res.send("products");
});

app.post("/send", (req, res) => {
  console.log(req.body);
  res.send("Our response was sent");
});

// ----------------------------------------------------------------------------------------------------------------

app.post("/send", (req, res) => {
  const dataFclient = req.body;

  fs.readFile("./data.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("Error reading file");
    }
    const parsedData = JSON.parse(data); // using parse because we want to add data to messages/ modify the data
    console.log(parsedData);

    //modifying part
    parsedData.messages = [...parsedData.messages, dataFclient];
    console.log(parsedData);

    // writing back part/ storing it in data.json
    fs.writeFile("./data.json", JSON.stringify(parsedData), "utf-8", () => {
      res.send("message added");
    });
  });
});

// -----------------------------------------------------------------------------------------------------------------

app.delete("/messages/:id", (req, res) => {
  const id = Number(req.params.id);

  //read the file and get the data
  fs.readFile("./data.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("Error reading file");
    }
    const newData = JSON.parse(data);
    const newMessages = newData.messages;

    //modification
    //delete the particular item
    const remaining_msgs = newMessages.filter((data) => data.id !== id);

    newData.messages = remaining_msgs;
    console.log(newData);

    //write the modified file
    fs.writeFile("./data.json", JSON.stringify(newData), "utf-8", () => {
      res.send("message deleted");
    });
  });
});

// -------------------------------------------------------------------------------------------------------------------

app.listen(5000, () => {
  console.log("Server started");
});
