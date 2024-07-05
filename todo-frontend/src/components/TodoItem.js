import React, { useState } from "react";
import UpdateTodoForm from "./UpdateTodoForm";

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    onDelete(todo._id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (text, completed) => {
    onUpdate(todo._id, text, completed);
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing ? (
        <>
          <h5 className="card-title">{todo.text}</h5>
          <p className="card-text">
            Completed: {todo.completed ? "Yes" : "No"}
          </p>
          <button className="btn btn-danger mr-2" onClick={handleDelete}>
            Delete
          </button>
          <button className="btn btn-info mr-2" onClick={handleEdit}>
            Edit
          </button>
        </>
      ) : (
        <UpdateTodoForm
          todo={todo}
          onUpdate={handleUpdate}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default TodoItem;
