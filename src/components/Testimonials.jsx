export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana Carolina",
      title: "Aprovada em Medicina",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      quote: "O Study Better mudou minha forma de estudar...",
      rating: 5,
    },
    {
      name: "Pedro Henrique",
      title: "Aprovado em Engenharia",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Nunca fui bom em exatas, mas as videoaulas...",
      rating: 5,
    },
    {
      name: "Juliana Santos",
      title: "Aprovada em Direito",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "O plano de estudos me deu direcionamento...",
      rating: 4.5,
    },
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="lg:text-center mb-8">
          <h2 className="text-base text-indigo-600 font-semibold uppercase">Depoimentos</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">O que nossos alunos dizem</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t,i) => (
            <div key={i} className="bg-gray-50 p-6 rounded shadow">
              <div className="flex items-center">
                <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-gray-500">{t.title}</p>
                </div>
              </div>
              <p className="italic text-gray-600 mt-4">{t.quote}</p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, j) => (
                  <i key={j}
                    className={`fas fa-star${j + 0.5 < t.rating ? '' : j < t.rating ? '-half-alt' : '-alt'} text-yellow-400`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
