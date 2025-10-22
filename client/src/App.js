import React from "react";
import HeaderBar from "./components/HeaderBar";
import FileExplorer from "./components/FileExplorer";
import CodeEditor from "./components/CodeEditor";
import PreviewPane from "./components/PreviewPane";
import { useProject } from "./hooks/useProject";
import "./styles/main.css";

export default function App() {
  const { project, setProject, saveProject, loadProject } = useProject();

  return (
    <div className="outer">
      <HeaderBar saveProject={saveProject} loadProject={loadProject} />
      <div className="ide">
        <FileExplorer project={project} setProject={setProject} />
        <CodeEditor project={project} setProject={setProject} />
        <PreviewPane project={project} />
      </div>
    </div>
  );
}
