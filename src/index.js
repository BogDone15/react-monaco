import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProjectProvider } from "./context";

ReactDOM.render(
  <ProjectProvider>
    <App />
  </ProjectProvider>,
  document.getElementById("root")
);
