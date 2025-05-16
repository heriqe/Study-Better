export default function Tests() {
    const tests = [
      { icon: "fa-file-alt", title: "Simulado ENEM 2023", desc: "Prova completa", questions: 180, color: "indigo", status: "Disponível", statusColor: "green" },
      { icon: "fa-flask", title: "Ciências da Natureza", desc: "Foco em Física e Química", questions: 45, color: "purple", status: "Disponível", statusColor: "green" },
      { icon: "fa-history", title: "Humanas 2023", desc: "História e Geografia", questions: 45, color: "pink", status: "Em breve", statusColor: "yellow" },
    ]
  
    return (
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Simulados</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Prepare-se com provas reais
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Simulados cronometrados com correção TRI igual ao ENEM
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tests.map((test, index) => (
              <div key={index} className="test-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 bg-${test.color}-100 rounded-md p-3`}>
                      <i className={`fas ${test.icon} text-${test.color}-600 text-xl`}></i>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{test.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{test.desc}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Questões</span>
                      <span>{test.questions}</span>
                    </div>
                    <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                      <div className={`bg-${test.color}-500 h-2 rounded-full`} style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-${test.statusColor}-100 text-${test.statusColor}-800`}>
                      {test.status}
                    </span>
                  </div>
                  <div className="mt-6">
                    <button
                      type="button"
                      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                        test.status === "Disponível" ? `bg-${test.color}-600 hover:bg-${test.color}-700 focus:ring-${test.color}-500` : 'bg-gray-400 cursor-not-allowed'
                      } focus:outline-none focus:ring-2 focus:ring-offset-2`}
                    >
                      {test.status === "Disponível" ? "Iniciar simulado" : "Indisponível"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              Ver todos os simulados
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }