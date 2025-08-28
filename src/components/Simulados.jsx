import React from "react";

const simulados = [
  {
    name: "Simulado ENEM",
    description: "Questões interdisciplinares com padrão ENEM.",
    icon: "fas fa-clipboard-list",
    gradient: "from-pink-500 to-red-500",
    route: "/simulados/enem",
  },
  {
    name: "Simulado Fuvest",
    description: "Questões objetivas e discursivas estilo Fuvest.",
    icon: "fas fa-university",
    gradient: "from-red-600 to-red-800",
    route: "/simulados/fuvest",
  },
  {
    name: "Simulado Unicamp",
    description: "Foco em interpretação e redação.",
    icon: "fas fa-globe",
    gradient: "from-green-500 to-green-700",
    route: "/simulados/unicamp",
  },
  {
    name: "Matemática",
    description: "Álgebra, geometria e lógica.",
    icon: "fas fa-calculator",
    gradient: "from-blue-400 to-blue-600",
    route: "/simulados/matematica",
  },
  {
    name: "Português",
    description: "Gramática, interpretação e literatura.",
    icon: "fas fa-book-open",
    gradient: "from-purple-500 to-purple-700",
    route: "/simulados/portugues",
  },
  {
    name: "História",
    description: "Brasil, mundo, política e sociedade.",
    icon: "fas fa-history",
    gradient: "from-orange-400 to-yellow-500",
    route: "/simulados/historia",
  },
];

const Simulados = () => (
  <section className="py-16 bg-gray-50 min-h-screen">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4 text-indigo-700">Escolha seu simulado</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Teste seus conhecimentos com simulados temáticos e por vestibular.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {simulados.map((sim, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className={`h-40 bg-gradient-to-r ${sim.gradient} flex items-center justify-center`}>
              <i className={`${sim.icon} text-white text-6xl`}></i>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{sim.name}</h3>
              <p className="text-gray-600 mb-4">{sim.description}</p>
              <a
                href={sim.route}
                className="text-indigo-600 font-medium hover:text-indigo-800 transition"
              >
                Acessar simulado →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Simulados;
