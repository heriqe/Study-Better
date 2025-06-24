export default function StudyPlan() {
  return (
    <div className="bg-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Plano de Estudos</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Organize seu tempo e alcance sua aprovação
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Crie planos de estudos personalizados, acompanhe seu progresso e fique sempre motivado.
        </p>
        <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Criar plano
        </button>
      </div>
    </div>
  )
}
