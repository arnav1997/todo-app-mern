from pymongo import MongoClient

# Replace the following with your MongoDB connection string
client = MongoClient('mongodb://localhost:27017/todo-app')

# Create a database
db = client.todo_db

# Create a collection and insert a document
collection = db.todo_collection
collection.insert_one({"key": "value"})

print("Database and collection created successfully.")
