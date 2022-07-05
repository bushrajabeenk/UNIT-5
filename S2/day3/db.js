// const mongoose = require("mongoose");

// 1. connection to DB
// const connectDB = async () => {
//      const con = await mongoose.connect(
//        "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.0"
//      );
//   const con = await mongoose.connect("mongodb://localhost:27017/web-17");
//   console.log("Connection was successful");

//   const student1 = new StudentModel({
//     name: "Bush",
//         if number is given in below way, mongoose typecasts it and tries to
//         convert it to a number, but if you give a name instead of number, it gives error
//         age: "11"
//         age: "Bush"
//     age: 24,
//     city: "Bangalore",
//     hobbies: ["A", "B", "C"],
//   });

//   const saveStudent = await student1.save();
//   console.log("Student 1 saved");

//   const students = await StudentModel.find();
//   console.log(students);

//   con.disconnect();
// };

// connectDB();

// 2. Model/Schema

//  schema
// const studentSchema = mongoose.Schema({
//   name: { type: String, required: true },
//   age: { type: Number, required: true },
//   city: { type: String, required: true },
//   hobbies: [String, String],
// });

//  model
//  S capital
// const StudentModel = mongoose.model("student", studentSchema);

// -------------------------------------------------------------------------------------------------------------------------------------------

// FOR EXPRESS

const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017/web-17");

// schema
const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  city: { type: String, required: true },
  hobbies: [String, String],
  title: { type: String, required: true },
  rating: { type: Number, required: true },
});

const StudentModel = mongoose.model("student", studentSchema);

module.exports = { connection, StudentModel };
