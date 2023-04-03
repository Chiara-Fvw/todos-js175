const express = require("express");
const morgan = require("morgan");

const app = express();
const host = "localhost";
const port = 3000;

//static data for initial testing
let todoList = require("./lib/seed-data");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("lists");
});


//listener
app.listen(port, host, () => {
  console.log(`Listening on port ${port} of ${host}!`);
});