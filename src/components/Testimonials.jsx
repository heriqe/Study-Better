export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana Carolina",
      title: "Aprovada em Medicina",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      quote: "O Study Better mudou minha forma de estudar. Os simulados são idênticos ao ENEM e o plano de estudos me ajudou a organizar meu tempo. Consegui minha aprovação graças a essa plataforma!",
      rating: 5,
    },
    {
      name: "Pedro Henrique",
      title: "Aprovado em Engenharia",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Nunca fui bom em exatas, mas as videoaulas e exercícios do Study Better me fizeram entender conceitos que antes pareciam impossíveis. Minha nota em matemática subiu 180 pontos!",
      rating: 5,
    },
    {
      name: "Juliana Santos",
      title: "Aprovada em Direito",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "Estudava sozinha e me sentia perdida. O Study Better me deu direcionamento e mostrou exatamente onde precisava melhorar. A correção TRI dos simulados foi crucial para eu saber minha nota real.",
      rating: 4.5,
    },
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Depoimentos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            O que nossos alunos dizem
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </div>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star${i + 0.5 < testimonial.rating ? '' : i < testimonial.rating ? '-half-alt' : '-alt'} text-yellow-400`}
                  ></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
