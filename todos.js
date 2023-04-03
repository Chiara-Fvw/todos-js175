const express = require("express");
const morgan = require("morgan");

const app = express();
const host = "localhost";
const port = 3000;

//static data for initial testing
let todoLists = require("./lib/seed-data");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));
app.use(express.static("public"));

//return the list of todo lists sorted by completion status and title
const sortTodoLists = lists => {
  return lists.slice().sort((todoListA, todoListB) => {
    let isDoneA = todoListA.isDone();
    let isDoneB = todoListB.isDone();

    if (!isDoneA && isDoneB) {
      return -1;
    } else if (isDoneA && !isDoneB) {
      return 1;
    } else {
      let titleA = todoListA.title;
      let titleB = todoListB.title;

      if (titleA < titleB) {
        return -1;
      } else if (titleA > titleB) {
        return 1;
      } else {
        return 0;
      }
    };
    
  });
};

app.get("/", (req, res) => {
  res.render("lists", { 
    todoLists: sortTodoLists(todoLists),
  });
});


//listener
app.listen(port, host, () => {
  console.log(`Listening on port ${port} of ${host}!`);
});