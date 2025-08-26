import React from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../components/LoginModal";
import Modals from "../components/Modals"; // cadastro

const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-8">
      {/* Top bar */}
      <div className="w-full flex items-center justify-between px-4 mb-8">
        <button
          onClick={() => navigate("/")}
          className="text-indigo-600 font-bold text-lg hover:underline"
        >
          ← Voltar
        </button>
        <h1 className="text-2xl font-bold text-indigo-700">Study Better</h1>
        <div></div> {/* Placeholder para alinhamento */}
      </div>

      {/* Login e Cadastro centralizados */}
      <div className="flex flex-col md:flex-row gap-8">
        <LoginModal />
        <Modals />
      </div>
    </div>
  );
};

export default AuthPage;
