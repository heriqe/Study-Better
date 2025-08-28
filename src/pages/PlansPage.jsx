// src/pages/PlansPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaUniversity, FaBook, FaLaptopCode } from "react-icons/fa";

const plans = [
  {
    id: "enem",
    title: "Plano ENEM (3 a 6 meses)",
    description: "Estratégia completa para o ENEM, unindo teoria, questões e redação.",
    icon: <FaGraduationCap className="text-white text-4xl" />,
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: "fuvest",
    title: "Plano Fuvest (6 meses)",
    description: "Preparação focada no perfil da prova, com ênfase em exatas e redação.",
    icon: <FaUniversity className="text-white text-4xl" />,
    gradient: "from-purple-500 to-purple-700",
  },
  {
    id: "unicamp",
    title: "Plano Unicamp (6 meses)",
    description: "Estudo direcionado com foco em interpretação e questões discursivas.",
    icon: <FaBook className="text-white text-4xl" />,
    gradient: "from-green-500 to-green-700",
  },
  {
    id: "tecnologia",
    title: "Plano Carreiras Tech",
    description: "Base de matemática, lógica e raciocínio para carreiras de tecnologia.",
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
              <div className={`h-40 bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                {plan.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <p className="text-gray-600">{plan.description}</p>
                <span className="text-[#47a5df] font-medium block mt-4">Ver mais →</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PlansPage;
