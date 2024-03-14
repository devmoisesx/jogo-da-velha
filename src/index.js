import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/generic/reset.css";
import "./styles/elements/elements.css";
import "./styles/settings/settings.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
