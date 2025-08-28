import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaUniversity, FaBook, FaLaptopCode } from "react-icons/fa";

const plans = [
  {
    id: "enem",
    title: "Plano ENEM (3 a 6 meses)",
    description:
      "Montado pela equipe Study Better para preparar você para todas as áreas do ENEM. Objetivo: dominar teoria, treinar com questões e garantir alto desempenho na redação.",
    icon: <FaGraduationCap className="text-white text-4xl" />,
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: "fuvest",
    title: "Plano Fuvest (3 a 6 meses)",
    description:
      "Desenvolvido pela equipe Study Better com foco nas exigências da Fuvest. Objetivo: aprofundar nas disciplinas-chave e praticar questões no formato da prova.",
    icon: <FaUniversity className="text-white text-4xl" />,
    gradient: "from-purple-500 to-purple-700",
  },
  {
    id: "unicamp",
    title: "Plano Unicamp (3 a 6 meses)",
    description:
      "Criado pela equipe Study Better para treinar interpretação e questões discursivas, alinhado ao estilo e conteúdos cobrados pela Unicamp.",
    icon: <FaBook className="text-white text-4xl" />,
    gradient: "from-green-500 to-green-700",
  },
  {
    id: "tecnologia",
    title: "Plano Carreiras Tech (3 a 6 meses)",
    description:
      "Planejamento da equipe Study Better para formar uma base sólida em programação, lógica e ferramentas, visando inserir você no mercado de tecnologia.",
    icon: <FaLaptopCode className="text-white text-4xl" />,
    gradient: "from-yellow-500 to-amber-500",
  },
];

const PlansPage = () => {
  return (
    <div className="App font-sans">
      <main className="pt-24 bg-gray-50 min-h-screen px-4">
        <h1 className="text-4xl font-bold text-center text-[#061d41] mb-12">
          Escolha seu Plano de Estudos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Link
              key={plan.id}
              to={`/planos/${plan.id}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition transform"
            >
              <div
                className={`h-40 bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}
              >
                {plan.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <p className="text-gray-600">{plan.description}</p>
                <span className="text-[#47a5df] font-medium block mt-4">
                  Ver mais →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PlansPage;
