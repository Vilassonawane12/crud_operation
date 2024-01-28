const mongoose = require("mongoose");

// Defining Schema

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 60,
  },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: {
      validator: (value) => value >= 5000.5,
      message: "Fees must be greater than or equal to 5000.5",
    },
  },
});

// Model

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;
