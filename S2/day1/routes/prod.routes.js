const { Router } = require("express");

const prodRoutes = Router();

const fs = require("fs");

prodRoutes.post("/create", (req, res) => {
  const dataFClient = req.body;

  fs.readFile("./products.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("Error reading file");
    }
    const parseData = JSON.parse(data);

    parseData.products = [...parseData.products, dataFClient];

    fs.writeFile("./products.json", JSON.stringify(parseData), "utf-8", () => {
      res.send("Product added");
    });
  });
});

// prodRoutes.get("/", (req, res) => {
//   res.send("Products received");
// });

prodRoutes.get("/", (req, res) => {
  fs.readFile("./products.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.send("Products received");
  });
});

prodRoutes.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  fs.readFile("./products.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("Error reading file");
    }
    const parsedData = JSON.parse(data);

    parsedData.products = parsedData.products.map((product) =>
      product.id == id ? (product = req.body) : product
    );

    fs.writeFile(
      "./products.json",
      JSON.stringify(parsedData),
      { encoding: "utf-8" },
      () => {
        res.send("Product updated");
      }
    );
  });
});

prodRoutes.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  fs.readFile("./products.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("Error reading file");
    }

    const newData = JSON.parse(data);
    const newProd = newData.products;

    const remaining_products = newProd.filter((product) => product.id !== id);

    newData.products = remaining_products;

    fs.writeFile("./products.json", JSON.stringify(newData), "utf-8", () => {
      res.send("Product deleted");
    });
  });
});

module.exports = prodRoutes;
