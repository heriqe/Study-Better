import React from "react";

const simulados = [
  { title: "Simulado ENEM Completo", description: "180 questões divididas em 4 áreas do conhecimento.", duration: "5h30min", icon: "fas fa-graduation-cap", gradient: "from-purple-600 to-indigo-600" },
  { title: "Simulado FUVEST", description: "90 questões no formato da primeira fase.", duration: "3h", icon: "fas fa-university", gradient: "from-blue-600 to-cyan-500" },
  { title: "Simulado por Matéria", description: "Escolha uma matéria e teste seus conhecimentos.", duration: "1h", icon: "fas fa-book", gradient: "from-green-600 to-emerald-500" }
];

const Simulados = () => (
  <section id="simulados" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Simulados</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Teste seus conhecimentos com simulados no formato do ENEM e outros vestibulares.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {simulados.map((sim, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-xl shadow-md overflow-hidden transition-all duration-300 card-hover fade-in"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className={`h-48 bg-gradient-to-r ${sim.gradient} flex items-center justify-center`}>
              <i className={`${sim.icon} text-white text-6xl`}></i>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{sim.title}</h3>
              <p className="text-gray-600 mb-4">{sim.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Duração: {sim.duration}</span>
                <button
                  onClick={() => document.getElementById("login-modal").classList.remove("hidden")}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Iniciar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Simulados;
