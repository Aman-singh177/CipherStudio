import { useState } from "react";
import { saveProjectAPI, loadProjectAPI } from "../services/api";

export function useProject() {
  const [project, setProject] = useState({
    title: "My First Studio",
    files: { "App.jsx": "console.log('Hello World');" }
  });

  const saveProject = async () => {
    try {
      const response = await saveProjectAPI(project);
      alert(`Project saved with ID: ${response._id}`);
    } catch (err) {
      console.error(err);
      alert("Failed to save project");
    }
  };

  const loadProject = async (id) => {
    try {
      const response = await loadProjectAPI(id);
      setProject(response);
    } catch (err) {
      console.error(err);
      alert("Failed to load project");
    }
  };

  return { project, setProject, saveProject, loadProject };
}
