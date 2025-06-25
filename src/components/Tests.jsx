export default function Tests() {
  const tests = [
    { icon: "fa-file-alt", title: "Simulado ENEM 2023", desc: "Prova completa", questions: 180, color: "indigo", status: "Disponível", statusColor: "green" },
    { icon: "fa-flask", title: "Ciências da Natureza", desc: "Foco em Física e Química", questions: 45, color: "purple", status: "Disponível", statusColor: "green" },
    { icon: "fa-history", title: "Humanas 2023", desc: "História e Geografia", questions: 45, color: "pink", status: "Em breve", statusColor: "yellow" },
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="lg:text-center mb-8">
          <h2 className="text-base text-indigo-600 font-semibold uppercase">Simulados</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">Prepare-se com provas reais</p>
          <p className="mt-4 text-xl text-gray-500">Simulados cronometrados com correção TRI</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tests.map((t, i) => (
            <div key={i} className="test-card bg-white p-6 rounded-xl shadow border">
              <div className="flex items-center">
                <div className={`bg-${t.color}-100 p-3 rounded-md`}>
                  <i className={`fas ${t.icon} text-${t.color}-600 text-xl`}></i>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">{t.title}</h3>
                  <p className="text-sm text-gray-500">{t.desc}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Questões</span>
                  <span>{t.questions}</span>
                </div>
                <div className="mt-1 bg-gray-200 rounded-full h-2">
                  <div className={`bg-${t.color}-500 h-2 rounded-full`} style={{ width: '100%' }} />
                </div>
              </div>
              <div className="mt-4">
                <span className={`inline-flex px-3 py-0.5 rounded-full text-sm font-medium bg-${t.statusColor}-100 text-${t.statusColor}-800`}>
                  {t.status}
                </span>
              </div>
              <div className="mt-6">
                <button
                  disabled={t.status !== 'Disponível'}
                  className={`w-full px-4 py-2 rounded-md text-white ${
                    t.status === 'Disponível' ? `bg-${t.color}-600 hover:bg-${t.color}-700` : `bg-gray-400 cursor-not-allowed`
                  }`}
                >
                  {t.status === 'Disponível' ? 'Iniciar simulado' : 'Indisponível'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
)}
