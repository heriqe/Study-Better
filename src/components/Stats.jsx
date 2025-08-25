import React from "react";

const Stats = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Nossos números</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="fade-in">
          <div className="text-5xl font-bold text-indigo-600 mb-2">10K+</div>
          <div className="text-gray-600">Estudantes ativos</div>
        </div>
        <div className="fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="text-5xl font-bold text-indigo-600 mb-2">500+</div>
          <div className="text-gray-600">Horas de conteúdo</div>
        </div>
        <div className="fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="text-5xl font-bold text-indigo-600 mb-2">98%</div>
          <div className="text-gray-600">Satisfação dos alunos</div>
        </div>
        <div className="fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="text-5xl font-bold text-indigo-600 mb-2">1K+</div>
          <div className="text-gray-600">Questões disponíveis</div>
        </div>
      </div>
    </div>
  </section>
);

export default Stats;
