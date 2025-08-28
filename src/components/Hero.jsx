// src/components/Hero.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="text-white py-16"
      style={{
        background: "linear-gradient(90deg, #47a5df 0%, #061d41 100%)",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Texto */}
        <div className="max-w-xl mb-8 md:mb-0 flex-1">
          <h1 className="text-4xl font-bold leading-snug mb-4">
            Sua aprovação começa aqui
          </h1>
          <p className="text-lg text-gray-100 mb-6">
            Domine o ENEM e vestibulares com conteúdos exclusivos, simulados realistas e planos de estudo feitos sob medida para você.
          </p>
          <button
            onClick={() => navigate("/materias")}
            className="bg-white text-[#061d41] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Começar agora
          </button>
        </div>

        {/* Imagem grande ocupando metade da tela */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/img/materiais-estudo-novo.png"
            alt="Materiais de estudo"
            className="w-full max-w-2xl object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
