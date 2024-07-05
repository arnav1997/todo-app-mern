const API_URL = "http://localhost:5000/api/todos";

const TodoService = {
  getAllTodos: async () => {
    const response = await fetch(API_URL);
    return response.json();
  },

  addTodo: async (text) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    return response.json();
  },

  deleteTodo: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return response.json();
  },

  updateTodo: async (id, text, completed) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, completed }),
    });
    return response.json();
  },
};

export default TodoService;
