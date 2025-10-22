import React from "react";

export default function PreviewPane({ project }) {
  return (
    <div className="preview">
      <h3>Live Preview</h3>
      <iframe
        title="preview"
        srcDoc={project.files["App.jsx"] || ""}
        style={{ width: "100%", height: "400px", border: "1px solid #ccc" }}
      />
    </div>
  );
}
