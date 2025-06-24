export default function Hero() {
  return (
    <div className="hero-gradient text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Prepare-se para o ENEM e Vestibulares
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl">
            Conteúdos exclusivos, simulados personalizados e plano de estudos inteligente para você alcançar sua aprovação.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <a
              href="#"
              className="bg-white text-indigo-600 px-8 py-3 border border-transparent rounded-md text-base font-medium hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
            >
              Começar agora
            </a>
            <a
              href="#"
              className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 border border-transparent rounded-md text-base font-medium md:py-4 md:text-lg md:px-10"
            >
              Ver planos
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
