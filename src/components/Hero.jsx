// src/components/Hero.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative text-white py-16 overflow-hidden fade-in"
      style={{
        background: "linear-gradient(90deg, #47a5df 0%, #061d41 100%)",
        animationDelay: "0s",
      }}
    >
      {/* Decoração sutil (não altera o gradiente) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative flex flex-col md:flex-row items-center justify-between">
        {/* Texto */}
        <div className="max-w-xl mb-10 md:mb-0 flex-1">
          <span className="inline-block text-[11px] uppercase tracking-wider bg-white/15 backdrop-blur px-3 py-1 rounded-full mb-3">
            Plataforma Study Better
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mb-4">
            Sua aprovação começa aqui
          </h1>
          <p className="text-lg text-gray-100/90 mb-6">
            Domine o ENEM e vestibulares com planos estratégicos criados pela nossa equipe,
            simulados realistas e uma rotina de estudos clara e sustentável.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate("/planos")}
              className="bg-white text-[#061d41] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 active:scale-[0.98] transition shadow-lg shadow-black/10"
            >
              Comece seu Plano de Estudos
            </button>
            <button
              onClick={() => navigate("/simulados")}
              className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg font-medium hover:bg-white/20 active:scale-[0.98] transition border border-white/30"
            >
              Fazer um Simulado
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-100/85">
            Prefere começar pelas matérias?{" "}
            <button
              onClick={() => navigate("/materias")}
              className="underline underline-offset-4 hover:text-white transition"
            >
              Explore aqui
            </button>
            .
          </p>
        </div>

        {/* Imagem grande ocupando metade da tela */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/img/StudyBetter.png"
            alt="Materiais de estudo"
            className="w-full max-w-2xl object-contain rounded-lg shadow-2xl shadow-black/20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
