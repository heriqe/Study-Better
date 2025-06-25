export default function Stats() {
  const stats = [
    { icon: "fa-user-graduate", title: "Alunos aprovados", value: "2.458" },
    { icon: "fa-book", title: "Questões disponíveis", value: "15.723" },
    { icon: "fa-chart-line", title: "Melhoria média", value: "42%" },
    { icon: "fa-clock", title: "Horas de estudo", value: "1.2M" },
  ]

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="lg:text-center mb-8">
          <h2 className="text-base text-indigo-600 font-semibold uppercase">Resultados comprovados</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossos alunos estão conquistando suas aprovações
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded shadow">
              <div className="flex items-center">
                <div className="bg-indigo-500 p-3 rounded-md">
                  <i className={`fas ${s.icon} text-white text-xl`}></i>
                </div>
                <div className="ml-5">
                  <dt className="text-sm font-medium text-gray-500">{s.title}</dt>
                  <dd className="text-2xl font-semibold text-gray-900">{s.value}</dd>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
