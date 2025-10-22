import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

export default function CodeEditor({ project }) {
  return (
    <div className="code-editor">
      <Sandpack
        template="react"
        files={project.files}
        options={{ showLineNumbers: true, editorHeight: 400 }}
      />
    </div>
  );
}
