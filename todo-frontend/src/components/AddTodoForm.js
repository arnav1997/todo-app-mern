import React, { useState } from "react";

const AddTodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) return;

    await onAdd(text);
    setText("");
  };

  return (
    <div className="card mx-auto" style={{ maxWidth: "20rem" }}>
      <div className="card-body">
        <h5 className="card-title text-center mb-4">Add Todo</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter todo"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodoForm;
