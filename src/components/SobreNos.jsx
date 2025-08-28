// src/components/SobreNos.jsx
import React from "react";
import { Link } from "react-router-dom";

const SobreNos = () => {
  return (
    <section className="bg-white" data-aos="fade-up">
      {/* Proposta de valor */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block text-xs uppercase tracking-wider bg-[#e8f4fb] text-[#2b6e99] px-3 py-1 rounded-full mb-4">
            Conteúdo criado pela Equipe Study Better
          </span>
          <h2 className="text-3xl font-bold text-[#061d41] mb-4">
            Estudo com método, foco e resultados
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Organizamos sua rotina com planos claros, simulados fiéis às bancas e 
            um caminho prático de evolução. Menos adivinhação, mais constância e progresso real.
          </p>
        </div>
      </div>

      {/* KPIs */}
      <div className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { k: "4", t: "planos estratégicos prontos" },
            { k: "+ Simulados", t: "no formato das principais provas" },
            { k: "100%", t: "foco em clareza e organização" },
          ].map((item) => (
            <div
              key={item.t}
              className="rounded-xl p-[1px] bg-gradient-to-r from-sky-200 to-indigo-200"
            >
              <div className="bg-white rounded-[11px] p-6 shadow-sm">
                <p className="text-3xl font-bold text-[#061d41]">{item.k}</p>
                <p className="text-gray-600">{item.t}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Diferenciais */}
      <div className="relative py-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-sky-100 rounded-full blur-3xl opacity-60" />
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-[#061d41] text-center mb-10">
            Nossos diferenciais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "📚 Planos com método", desc: "Roteiros práticos com blocos diários, revisões e simulados." },
              { title: "📝 Simulados realistas", desc: "Questões no formato das bancas para treinar estratégia." },
              { title: "🎯 Foco no essencial", desc: "Conteúdos-chave selecionados para evitar dispersão." },
              { title: "⏳ Rotina sustentável", desc: "Pausas, revisão espaçada e metas semanais." },
              { title: "🔍 Clareza visual", desc: "Seções bem divididas e leitura fácil em qualquer tela." },
              { title: "💼 Amplitude", desc: "ENEM, Fuvest, Unicamp e Tech no mesmo lugar." },
            ].map((card) => (
              <div
                key={card.title}
                className="group rounded-xl p-[1px] bg-gradient-to-br from-sky-200 to-indigo-200"
              >
                <div className="bg-white/70 backdrop-blur rounded-[11px] p-6 shadow-md transition-transform group-hover:-translate-y-0.5 group-hover:shadow-lg">
                  <h4 className="font-semibold text-lg text-[#47a5df] mb-2">{card.title}</h4>
                  <p className="text-gray-700">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/planos"
              className="inline-flex items-center gap-2 bg-[#47a5df] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3993c9] active:scale-[0.98] transition shadow-lg shadow-sky-900/10"
            >
              Explorar planos
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Como funciona */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-[#061d41] mb-10">Como funciona</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { n: "1. Escolha um plano", d: "ENEM, FUVEST, UNICAMP ou Carreiras Tech." },
              { n: "2. Siga o roteiro", d: "Blocos diários, revisão e simulados a cada ciclo." },
              { n: "3. Evolua com constância", d: "Ajuste a carga e foque no que mais cai." },
            ].map((step) => (
              <div key={step.n} className="p-6 rounded-xl border bg-white hover:shadow-md transition">
                <h4 className="font-semibold text-lg mb-2">{step.n}</h4>
                <p className="text-gray-600">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Para quem é */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-[#061d41] text-center mb-10">
            Para quem é o Study Better?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { t: "ENEM", d: "Roteiro completo com redação e simulados.", href: "/planos/enem" },
              { t: "Fuvest", d: "Foco em questões no estilo da banca.", href: "/planos/fuvest" },
              { t: "Unicamp", d: "Ênfase em interpretação e discursivas.", href: "/planos/unicamp" },
              { t: "Carreiras Tech", d: "Base em lógica, programação e projetos.", href: "/planos/tecnologia" },
            ].map((p) => (
              <div key={p.t} className="rounded-xl p-[1px] bg-gradient-to-r from-sky-200 to-indigo-200">
                <div className="bg-white rounded-[11px] p-6 shadow-sm hover:shadow-md transition">
                  <h4 className="font-semibold text-[#47a5df] mb-1">{p.t}</h4>
                  <p className="text-gray-600 text-sm">{p.d}</p>
                  <Link to={p.href} className="text-[#47a5df] text-sm mt-2 inline-block hover:underline underline-offset-4">
                    Ver Plano →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/planos"
              className="bg-[#47a5df] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3993c9] transition"
            >
              Explorar todos os planos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
