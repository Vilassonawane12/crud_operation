const StudentModel = require("../models/studentModels.js");

class StudentsController {
  static createDoc = async (req, res) => {
    const { name, age, fees } = req.body;
    console.log(name, age, fees);
    try {
      // const {name, age ,fees} = req.body;
      // // const age = req.body.age;

      // // Convert fees to a number
      // const feesNumber = parseFloat(fees);

      const doc = new StudentModel({ name, age, fees });
      const result = await doc.save();
      console.log(result);
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };

  static getAllDoc = async (req, res) => {
    try {
      const result = await StudentModel.find();
      // console.log(result);
      res.render("index", { data: result });
    } catch (error) {
      console.log(error);
    }
  };

  static editDoc = async (req, res) => {
    // console.log(req.params.id);
    try {
      const result = await StudentModel.findById(req.params.id);
      // console.log(result);
      res.render("edit", { data: result });
    } catch (error) {
      console.log(error);
    }
  };

  static updateDocById = async (req, res) => {
    // console.log(req.params.id);
    // console.log(req.body);
    try {
      const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    res.redirect("/student");
  };

  static deleteDocById = async (req, res) => {
    // console.log(req.params.id);
    try {
      const result = await StudentModel.findByIdAndDelete(req.params.id);
      console.log(result);
      
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }

  };
}
// module.exports = { home, createDoc, editDoc, updateDocById, deteleDocById };
module.exports = StudentsController;
