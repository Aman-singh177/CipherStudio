import React, { useState } from "react";

export default function HeaderBar({ saveProject, loadProject }) {
  const [loadId, setLoadId] = useState("");

  return (
    <div className="nav">
      <h2>  IDE </h2>
      <button onClick={saveProject}> Save Project </button>
      <input
        type="text"
        placeholder="Enter Project ID"
        value={loadId}
        onChange={(e) => setLoadId(e.target.value)}
      />
      <button onClick={() => loadProject(loadId)}>Load Project</button>
    </div>
  );
}
