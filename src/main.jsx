// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Inclui Tailwind e estilos globais

// 1) Importe o CSS do AOS
import "aos/dist/aos.css";
// 2) Importe o AOS
import AOS from "aos";

// 3) Inicialize o AOS antes de renderizar a App
AOS.init({
  once: true,      // animação dispara apenas na primeira vez que o elemento aparece
  duration: 800,   // duração das animações em milissegundos
  easing: "ease-out-cubic",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
