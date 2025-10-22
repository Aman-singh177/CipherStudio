## CipherStudio Backend

This is the backend for CipherStudio, a lightweight API that handles saving, loading, and managing projects created in the frontend React IDE.
It provides endpoints to store project files in a MongoDB database and retrieve them later, so users can continue editing their projects seamlessly.

The backend is built using Node.js, Express.js, and MongoDB with Mongoose for data modeling.

## Features
Save a project with multiple files and a title.
Load a project by its ID.
List all projects stored in the database.
Basic error handling for invalid requests.
Works with the frontend to provide a seamless coding experience.

## Tech Stack
Node.js – server runtime
Express.js – REST API framework
MongoDB Atlas – cloud database (or local MongoDB)
Mongoose – object modeling for MongoDB
Axios / Fetch – used by frontend to interact with backend

## Folder Structure and Explanation
The backend is organized to separate concerns and keep code readable:
src/index.js – main entry point; sets up Express, connects to MongoDB, and defines routes.
src/config/db.js – handles database connection logic.
src/routes/StudioRoute.js – defines API endpoints for saving, loading, and listing projects.
src/controllers/StudioController.js – contains the logic for each route (handling requests and responses).
src/models/StudioModel.js – defines the MongoDB schema for storing projects.
.env – contains environment variables like the MongoDB URI and port.
package.json – lists all dependencies and scripts.

The structure makes it easy to add new endpoints or features in the future.

## Setup Instructions

Clone the repository and navigate to the backend folder:
git clone https://github.com/<your-username>/cipherstudio.git
cd cipherstudio/backend
Install dependencies:
npm install

Create a .env file in the backend folder:

MONGO_URI=mongodb+srv://<your-username>:<your-password>@cluster0.jl4l6nk.mongodb.net/cipherstudio
PORT=3001

Replace the <username> and <password> with your MongoDB Atlas credentials.
You can also use a local MongoDB URI if desired:
 


## Start the server:
npm run dev


The backend will now be running on:
http://localhost:3001

API Endpoints
Method	Endpoint	Description
POST	/api/studio/save	Save a new project
GET	/api/studio/:id	Get a specific project by ID
GET	/api/studio	List all saved projects