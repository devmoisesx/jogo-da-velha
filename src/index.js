import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import "./styles/settings/spacing.css";
import "./styles/settings/colors.css";
import "./styles/settings/sizes.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
