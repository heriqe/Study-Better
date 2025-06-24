export default function Stats() {
  const stats = [
    { icon: "fa-user-graduate", title: "Alunos aprovados", value: "2.458" },
    { icon: "fa-book", title: "Questões disponíveis", value: "15.723" },
    { icon: "fa-chart-line", title: "Melhoria média", value: "42%" },
    { icon: "fa-clock", title: "Horas de estudo", value: "1.2M" },
  ]

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Resultados comprovados</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nossos alunos estão conquistando suas aprovações
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <i className={`fas ${stat.icon} text-white text-xl`}></i>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dt className="text-3xl font-extrabold text-gray-900">{stat.value}</dt>
                    <dd className="mt-1 text-gray-500">{stat.title}</dd>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
