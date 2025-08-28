// src/pages/LoginPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import AuthModals from "../components/AuthModals";

const LoginPage = () => {
  const navigate = useNavigate();

  // Função chamada assim que o login for concluído no modal
  const handleLoginSuccess = () => {
    navigate("/");           // Redireciona para home
    window.location.reload(); // Recarrega para atualizar o nome no Navbar
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/src/assets/wallpaper.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">
          Bem-vindo ao Study Better
        </h2>
        {/* Passamos o callback para o modal */}
        <AuthModals autoOpen={true} onLoginSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
};

export default LoginPage;
