// src/components/CTA.jsx
import React from "react";

const CTA = () => (
  <section className="py-16 bg-indigo-600 text-white text-center fade-in">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">
        Comece agora a estudar melhor!
      </h2>
      <p className="mb-8 max-w-xl mx-auto">
        Crie sua conta gratuitamente e tenha acesso a simulados e conteúdos
        completos para o ENEM e vestibulares.
      </p>
      <button
        onClick={() =>
          document.getElementById("login-modal").classList.remove("hidden")
        }
        className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
      >
        Criar Conta
      </button>
    </div>
  </section>
);

export default CTA;
