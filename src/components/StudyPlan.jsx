import { useEffect } from 'react'

export default function StudyPlan() {
  const progressData = [
    { day: "Segunda-feira", completed: 3, total: 4, color: "green", progress: 75 },
    { day: "Terça-feira", completed: 2, total: 4, color: "yellow", progress: 50 },
    { day: "Quarta-feira", completed: 4, total: 4, color: "green", progress: 100 },
    { day: "Quinta-feira", completed: 1, total: 4, color: "red", progress: 25 },
    { day: "Sexta-feira", completed: 0, total: 4, color: "gray", progress: 0 },
  ]

  useEffect(() => {
    const bars = document.querySelectorAll('[data-progress]')
    bars.forEach(bar => {
      const val = bar.getAttribute('data-progress')
      bar.style.width = '0%'
      setTimeout(() => { bar.style.width = `${val}%` }, 300)
    })
  }, [])

  return (
    <div className="bg-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Plano de Estudos Inteligente
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Nosso algoritmo cria um plano personalizado baseado no seu desempenho.
            </p>
            <div className="mt-8 flex space-x-3">
              <button className="bg-indigo-600 text-white px-5 py-3 rounded-md hover:bg-indigo-700 flex items-center">
                Criar meu plano
                <i className="fas fa-magic ml-2"></i>
              </button>
              <button className="border border-indigo-600 text-indigo-600 px-5 py-3 rounded-md hover:bg-gray-50 flex items-center">
                Ver exemplo
                <i className="fas fa-eye ml-2"></i>
              </button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 bg-white p-6 rounded shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Seu progresso semanal</h3>
            {progressData.map((d,i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{d.day}</span>
                  <span>{d.completed}/{d.total} atividades</span>
                </div>
                <div className="bg-gray-200 h-2 rounded-full">
                  <div data-progress={d.progress} className={`bg-${d.color}-500 h-2 rounded-full`} style={{ width: '0%' }} />
                </div>
              </div>
            ))}
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span>Progresso total</span>
                <span className="font-bold text-indigo-600">62%</span>
              </div>
              <div className="bg-gray-200 h-3 rounded-full mt-2">
                <div data-progress="62" className="bg-indigo-600 h-3 rounded-full w-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
