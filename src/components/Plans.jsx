import React from "react";

const plans = [
  {
    name: "Gratuito",
    price: "0",
    features: ["Acesso a 10 matérias", "Simulados limitados", "Suporte básico"],
    gradient: "from-gray-400 to-gray-600"
  },
  {
    name: "Premium",
    price: "29,90",
    features: ["Acesso completo a todas as matérias", "Simulados ilimitados", "Suporte prioritário"],
    gradient: "from-indigo-500 to-purple-500"
  }
];

const Plans = () => (
  <section id="planos" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Nossos planos</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Escolha o plano que mais se adequa às suas necessidades.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 card-hover fade-in"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className={`h-32 flex items-center justify-center bg-gradient-to-r ${plan.gradient}`}>
              <h3 className="text-3xl font-bold text-white">{plan.name}</h3>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold mb-4">{plan.price === "0" ? "Grátis" : `R$ ${plan.price}/mês`}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feat, i) => (
                  <li key={i} className="text-gray-600 flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i> {feat}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.getElementById("login-modal").classList.remove("hidden")}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Assinar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Plans;
