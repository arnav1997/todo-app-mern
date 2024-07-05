import React, { useState, useEffect } from "react";
import TodoService from "../services/TodoService"; // Import TodoService

const UpdateTodoForm = ({ todo, onUpdate }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (todo) {
      setText(todo.text);
    }
  }, [todo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return; // Ensure text is not empty or whitespace
    try {
      await TodoService.updateTodo(todo._id, text, todo.completed); // Call updateTodo from TodoService
      onUpdate(); // Trigger parent component's update method if needed
      setText(""); // Clear input after submission
    } catch (error) {
      console.error("Error updating todo:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Update Todo</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter updated todo text..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary mr-2">
            Update Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTodoForm;
