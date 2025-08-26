import React from "react";

const testimonials = [
  { name: "Aluno 1", feedback: "O StudyBetter transformou meus estudos! Agora me sinto mais confiante para o ENEM.", role: "Estudante", avatar: "https://i.pravatar.cc/100?img=1" },
  { name: "Aluno 2", feedback: "Os simulados são incríveis, consegui treinar exatamente o que precisava.", role: "Estudante", avatar: "https://i.pravatar.cc/100?img=2" },
  { name: "Aluno 3", feedback: "A plataforma é muito intuitiva e os conteúdos são claros e objetivos.", role: "Estudante", avatar: "https://i.pravatar.cc/100?img=3" }
];

const Testimonials = () => (
  <section id="depoimentos" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Depoimentos</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Veja o que nossos alunos estão falando sobre a plataforma.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-md fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="flex items-center mb-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="font-bold">{t.name}</h3>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-600">"{t.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
