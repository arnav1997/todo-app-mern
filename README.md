# Todo App

This project is a simple Todo application built with MERN stack (MongoDB, Express, React, Node.js).

## Features

- **CRUD Operations:** Create, Read, Update, and Delete todos.
- **Responsive Design:** Utilizes Bootstrap for responsive UI elements.
- **RESTful API:** Backend built with Express.js providing a RESTful API interface.

## Installation

### Prerequisites

- Node.js (and npm) installed locally
- MongoDB installed and running

### Backend Setup

1. Navigate to the `backend/` directory:
   ```bash
   cd backend/
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend/` directory with your MongoDB connection string. Example:
     ```
     MONGODB_URI=mongodb://localhost:27017/todo-app
     PORT=5000
     ```

4. Start the backend server:
   ```bash
   node index.js
   ```

### Frontend Setup

1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend/
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to view the Todo application.
- Add, edit, delete todos using the provided interface.
- Changes made are immediately reflected in the MongoDB database via the Express API.

## Technologies Used

- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** React.js, Bootstrap
- **Database:** MongoDB

## Contributing

Feel free to fork the repository, open issues, and submit pull requests. Contributions are welcome!