// src/components/Plans.jsx
import React from "react";

const Plans = () => {
  const plans = [
    {
      title: "Plano ENEM",
      description:
        "Organização completa para todas as áreas cobradas no ENEM, com foco em provas anteriores e simulados.",
      highlight: true,
      link: "/plano-enem",
    },
    {
      title: "Plano FUVEST",
      description:
        "Trilha de estudos direcionada para a FUVEST, com foco em leitura de obras obrigatórias e questões clássicas.",
      highlight: false,
      link: "/plano-fuvest",
    },
    {
      title: "Plano UNICAMP",
      description:
        "Conteúdos e exercícios específicos para a prova da UNICAMP, priorizando interpretação e análise crítica.",
      highlight: false,
      link: "/plano-unicamp",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        Planos de Estudo Pré-Montados
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-lg transition transform hover:-translate-y-1 ${
              plan.highlight ? "bg-indigo-600 text-white" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
            <p className="mb-6">{plan.description}</p>
            <a
              href={plan.link}
              className={`px-4 py-2 rounded inline-block ${
                plan.highlight
                  ? "bg-white text-indigo-600 hover:bg-gray-200"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              Ver Plano
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
