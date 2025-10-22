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