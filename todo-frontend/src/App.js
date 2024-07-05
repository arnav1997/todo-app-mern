import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import TodoService from "./services/TodoService";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const todos = await TodoService.getAllTodos();
    setTodos(todos);
  };

  const handleAddTodo = async (text) => {
    await TodoService.addTodo(text);
    fetchTodos();
  };

  const handleDeleteTodo = async (id) => {
    await TodoService.deleteTodo(id);
    fetchTodos();
  };

  const handleUpdateTodo = async (id, text, completed) => {
    await TodoService.updateTodo(id, text, completed);
    fetchTodos(); // Refresh todos after update
  };

  return (
    <div
      className="App d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="text-center">
        <h1>Todo App</h1>
        <div className="card p-3">
          <AddTodoForm onAdd={handleAddTodo} />
          <TodoList
            todos={todos}
            onDelete={handleDeleteTodo}
            onUpdate={handleUpdateTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
