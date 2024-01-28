const express = require("express");
const app = express();
const { join } = require("path");
// const bodyParser = require("body-parser");
const web = require("./routes/web");
const connect = require("./db/connect");
const PORT = process.env.PORT || "5000";
const DATABASE_URL = "mongodb://127.0.0.1:27017";

// Database connection
connect(DATABASE_URL);



// Middleware
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

// static files
app.use("/student", express.static(join(process.cwd(), "public")));
app.use("/student/edit", express.static(join(process.cwd(), "public")));

// set Templates Enginer
app.set("view engine", "ejs");

// Load routes
app.use("/student", web);

app.listen(PORT, () => {
  console.log(`Server listeing at http://localhost:${PORT}`);
});
