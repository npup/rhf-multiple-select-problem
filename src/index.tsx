import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const appRootSelector = "#app-root";
const appRoot = document.querySelector(appRootSelector);
const reactRoot = ReactDOM.createRoot(appRoot);

reactRoot.render(<App />);
