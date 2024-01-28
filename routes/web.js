const express = require("express");
const router = express.Router();
// const { home, createDoc, editDoc, updateDocById ,deteleDocById} = require("../controllers/studentsController");
const StudentsController = require("../controllers/studentsController");

router.get("/", StudentsController.getAllDoc);
router.post("/", StudentsController.createDoc);
router.get("/edit/:id", StudentsController.editDoc);
router.post("/update/:id", StudentsController.updateDocById);
router.post("/delete/:id", StudentsController.deleteDocById);

// module.exports = { home, createDoc, editDoc, updateDocById, deteleDocById };
module.exports = router;
