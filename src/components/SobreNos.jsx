import React from "react";
import { Link } from "react-router-dom";

const SobreNos = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#061d41] mb-4">
          O que é o Study Better?
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          O <strong>Study Better</strong> é uma plataforma de estudos criada para ajudar você a 
          organizar o tempo e se preparar de forma inteligente para o ENEM, vestibulares e concursos. 
          Nossa equipe desenvolveu planos estratégicos e simulados realistas para que você estude 
          com foco, eficiência e motivação.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg text-[#47a5df] mb-2">📚 Planos Estratégicos</h3>
            <p className="text-sm text-gray-600">
              Criados por especialistas para diferentes provas, com um passo a passo claro e organizado.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg text-[#47a5df] mb-2">📝 Simulados Realistas</h3>
            <p className="text-sm text-gray-600">
              Avalie seu conhecimento e pratique no formato das principais provas do país.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg text-[#47a5df] mb-2">🎯 Preparação Completa</h3>
            <p className="text-sm text-gray-600">
              Conte com um pacote completo de recursos para garantir seu progresso de forma consistente.
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/planos"
            className="bg-[#47a5df] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3993c9] transition"
          >
            Conhecer Planos
          </Link>
          <Link
            to="/simulados"
            className="bg-white border border-[#47a5df] text-[#47a5df] px-6 py-3 rounded-lg font-medium hover:bg-[#f0f9ff] transition"
          >
            Fazer Simulado
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
