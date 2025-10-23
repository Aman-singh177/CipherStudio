import React, { useState } from "react";
import { useColorMode } from "../context/ColorModeContext";

export default function HeaderBar({ saveProject, loadProject }) {
  const [loadId, setLoadId] = useState("");
  const { mode, toggleMode } = useColorMode();

  return (
    <div className="nav">
      <h2>IDE</h2>

      <div className="buttons">
        <button onClick={saveProject}>Save Project</button>
        <input
          type="text"
          placeholder="Enter Project ID"
          value={loadId}
          onChange={(e) => setLoadId(e.target.value)}
        />
        <button onClick={() => loadProject(loadId)}>Load Project</button>
        <button onClick={toggleMode}>
          {mode === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
}
