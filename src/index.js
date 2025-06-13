import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js"; // Ensure App.js is present in the same folder
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Ensure App.css exists in the same folder

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
