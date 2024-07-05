import React from "react";

const TodoList = ({ todos, onDelete, onUpdate }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Todo Text</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={todo._id}>
            <td>{index + 1}</td>
            <td>{todo.text}</td>
            <td>
              <button
                className="btn btn-info mr-2"
                onClick={() => onUpdate(todo._id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(todo._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
