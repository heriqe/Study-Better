import { useEffect } from 'react'

export default function Subjects() {
  const subjects = [
    { icon: "fa-atom", title: "Ciências da Natureza", desc: "Física, Química e Biologia", progress: 28, color: "red" },
    { icon: "fa-square-root-alt", title: "Matemática", desc: "Álgebra, Geometria e Estatística", progress: 45, color: "blue" },
    { icon: "fa-language", title: "Linguagens", desc: "Português, Literatura e Inglês", progress: 32, color: "green" },
    { icon: "fa-landmark", title: "Humanas", desc: "História, Geografia e Filosofia", progress: 38, color: "yellow" },
  ]

  useEffect(() => {
    const progressBars = document.querySelectorAll('[data-progress]')
    progressBars.forEach(bar => {
      const currentWidth = bar.dataset.progress
      bar.style.width = '0%'
      setTimeout(() => {
        bar.style.width = `${currentWidth}%`
      }, 300)
    })
  }, [])

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Matérias</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Conteúdo completo para todas as áreas
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Organizado conforme o edital do ENEM e principais vestibulares
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject, index) => (
            <div key={index} className="subject-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out">
              <div className="p-6">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 bg-${subject.color}-100 rounded-md p-3`}>
                    <i className={`fas ${subject.icon} text-${subject.color}-600 text-xl`}></i>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{subject.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{subject.desc}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Progresso</span>
                    <span>{subject.progress}%</span>
                  </div>
                  <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                    <div className={`bg-${subject.color}-500 h-2 rounded-full`} data-progress={subject.progress} style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            Ver todas as matérias
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
