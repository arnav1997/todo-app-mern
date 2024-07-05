const router = require("express").Router();
let Todo = require("../models/todo.model");

// Get all todos
router.route("/").get((req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Add a new todo
router.route("/").post((req, res) => {
  const text = req.body.text;

  const newTodo = new Todo({ text });

  newTodo
    .save()
    .then(() => res.json("Todo added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Update a todo
router.route("/:id").put((req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => {
      todo.text = req.body.text;
      todo.completed = req.body.completed;

      todo
        .save()
        .then(() => res.json("Todo updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// Delete a todo
router.route("/:id").delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json("Todo deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
