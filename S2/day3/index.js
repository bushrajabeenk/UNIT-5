const express = require("express");
const { connection, StudentModel } = require("./db");

const app = express();

app.use(express.json());

app.get("/students", async (req, res) => {
  const { rating } = req.query;
  console.log(rating);
  const result = await StudentModel.find({ rating }, { __v: 0 });
  // OR
  // const params = req.query;
  // console.log(params);
  // const result = await StudentModel.find({ ...params }, { __v: 0 });
  // OR
  // const result = await StudentModel.find(params, { __v: 0 });
  // __v is added by mongoose andmongoDB, we don't want it, so we give it as 0 in find function
  res.send(result);
});

// app.get("/students", async (req, res) => {
//   const { pageNo, perPage } = req.query;
//   console.log(params);
//   const result = await StudentModel.find({}, { __v: 0 })
//     .skip((pageNo - 1) * perPage)
//     .limit(perPage);
//   res.send(result);
// });

app.post("/students", async (req, res) => {
  const result = await StudentModel(req.body);
  await result.save();
  res.send(result);
});

app.listen(3210, async () => {
  try {
    await connection;
    console.log("Connection to db successfull");
  } catch {
    console.log("Failed to connectto db");
  }
  console.log("Server started at 3210");
});
