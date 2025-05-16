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
    const progressBars = document.querySelectorAll('[data-progress]');
    progressBars.forEach(bar => {
      const currentWidth = bar.dataset.progress;
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = `${currentWidth}%`;
      }, 300);
    });
  }, []);

  return (
    <div className="bg-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Plano de Estudos Inteligente
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Nosso algoritmo cria um plano personalizado baseado no seu desempenho, tempo disponível e objetivos.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a href="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Criar meu plano
                  <i className="fas fa-magic ml-2"></i>
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                  Ver exemplo
                  <i className="fas fa-eye ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Seu progresso semanal</h3>
                <span className="text-sm text-indigo-600">Semana 12/40</span>
              </div>
              <div className="space-y-4">
                {progressData.map((data, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>{data.day}</span>
                      <span>{data.completed}/{data.total} atividades</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`bg-${data.color}-500 h-2 rounded-full`} data-progress={data.progress} style={{ width: '0%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">Progresso total</span>
                  <span className="text-sm font-bold text-indigo-600">62%</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-indigo-600 h-3 rounded-full" data-progress={62} style={{ width: '0%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}