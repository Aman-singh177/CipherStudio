import React from "react";

export default function FileExplorer({ project, setProject }) {
  const addFile = () => {
    const name = prompt("Enter new file name:");
    if (name) {
      setProject({
        ...project,
        files: { ...project.files, [name]: "" }
      });
    }
  };

  return (
    <div className="file-explorer">
      <h3>Files</h3>
      <ul>
        {Object.keys(project.files).map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
      <button onClick={addFile}>Add File</button>
    </div>
  );
}
