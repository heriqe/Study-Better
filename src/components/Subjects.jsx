import { Link } from 'react-router-dom'

export default function Subjects() {
  const subjects = [
    { icon: "fa-square-root-alt", title: "Matemática", desc: "Álgebra, Geometria, Estatística", progress: 45, color: "blue" },
    { icon: "fa-language", title: "Linguagens", desc: "Português, Literatura, Inglês", progress: 32, color: "green" },
    { icon: "fa-atom", title: "Ciências da Natureza", desc: "Física, Química, Biologia", progress: 28, color: "red" },
    { icon: "fa-landmark", title: "Humanas", desc: "História, Geografia, Filosofia", progress: 38, color: "yellow" },
  ]

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="lg:text-center mb-8">
          <h2 className="text-base text-indigo-600 font-semibold uppercase">Matérias</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Conteúdo completo para todas as áreas
          </p>
          <p className="mt-4 text-xl text-gray-500">Organizado conforme o edital do ENEM</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {subjects.map((sub, i) => (
            <div key={i} className="subject-card bg-white p-6 rounded shadow transition hover:shadow-lg">
              <div className="flex items-center">
                <div className={`bg-${sub.color}-100 p-3 rounded-md`}>
                  <i className={`fas ${sub.icon} text-${sub.color}-600 text-xl`}></i>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">{sub.title}</h3>
                  <p className="text-sm text-gray-500">{sub.desc}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Progresso</span>
                  <span>{sub.progress}%</span>
                </div>
                <div className="mt-1 bg-gray-200 rounded-full h-2">
                  <div className={`bg-${sub.color}-500 h-2 rounded-full`} style={{ width: `${sub.progress}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/materias"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium shadow hover:bg-indigo-700"
          >
            Ver todas as matérias
          </Link>
        </div>
      </div>
    </div>
  )
}
