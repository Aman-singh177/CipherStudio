# CipherStudio Frontend

This folder contains the frontend part of the CipherStudio project.  
The goal of this app is to provide a simple browser-based coding environment where users can write, edit, and preview code in real time.  
It connects with the backend API to save and load projects from the database.

## Features
Create, delete, and organize files and folders.
Write React components with live syntax highlighting.
Preview project output in real time.
Save and load projects through the backend using a project ID. 

## Tech Stack
Frontend Framework: React.js 
Code Editor: Sandpack Editor (from CodeSandbox) 
Styling: CSS (you can add TailwindCSS if desired) 
State Management: React hooks and custom context for project data 
API Calls: Axios to connect with the backend

## Folder Structure

1. The frontend is organized to keep code modular and easy to maintain.
2. The src folder contains all application logic:
3. components holds reusable UI components like the code editor, preview pane, file explorer, and header bar with save/load buttons.
4.  contains main page components, including the IDE/home page.
5. hooks contains custom React hooks for managing project state and editor logic.
6. services contains functions to call the backend API for saving and loading projects.
7. context (if used) holds global state for project data across the app.
8. App.js is the main component that combines everything and sets up the layout.
9. styles.css contains basic styles for the interface.
The public folder contains static assets needed for the app.
package.json lists all dependencies and scripts to run the frontend.



## Setup Instructions

Clone the repository and navigate to the frontend folder:
git clone https://github.com/<your-username>/cipherstudio.git
cd cipherstudio/frontend

Install dependencies:
npm install

Start the development server:
npm start

Open your browser and go to:
http://localhost:3000

Usage Notes
The live preview shows the output of code written in the editor, including console.log outputs.
Use the "Save" button to store your current project to the backend.
Use the "Load" button to retrieve previously saved projects.
The UI is minimal to keep coding as the focus.
Ensure that Sandpack is installed. If not, install it manually:
npm install @codesandbox/sandpack-react


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