export default function CTA() {
    return (
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Pronto para transformar seus estudos?</span>
            <span className="block">Comece hoje mesmo.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Tenha acesso ilimitado a todos os conteúdos, simulados e ferramentas por menos de R$1 por dia.
          </p>
          <a href="#" className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
            Assinar agora
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    )
  }