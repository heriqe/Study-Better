import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css"; // Certifique-se de que esse arquivo existe em src/
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
