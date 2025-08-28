// src/components/SimuladoEnem.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const perguntas = [
  {
    id: "q1",
    enunciado:
      "Uma escola tinha 800 alunos e registrou um aumento de 15% no número de matrículas no ano seguinte. Qual é o novo total de alunos?",
    alternativas: ["915", "920", "940", "860", "880"],
    correta: 1,
    explicacao:
      "Novo total = 800 × 1,15 = 920. A alternativa correta é 920.",
  },
  {
    id: "q2",
    enunciado:
      "Em uma urna há 5 bolas vermelhas, 3 azuis e 2 verdes. Ao retirar uma bola ao acaso, qual a probabilidade de ela ser azul?",
    alternativas: ["10%", "20%", "30%", "40%", "50%"],
    correta: 2,
    explicacao:
      "Total de bolas = 5 + 3 + 2 = 10. Probabilidade(azul) = 3/10 = 30%.",
  },
  {
    id: "q3",
    enunciado:
      "Quatro máquinas produzem 120 camisetas em 6 horas. Mantendo a mesma eficiência, quantas camisetas 6 máquinas produzirão em 8 horas?",
    alternativas: ["160", "180", "200", "240", "320"],
    correta: 3,
    explicacao:
      "Produção ∝ máquinas × horas. 120 × (6×8)/(4×6) = 120 × 48/24 = 240.",
  },
  {
    id: "q4",
    enunciado:
      'Na expressão “O tempo voa”, qual figura de linguagem está sendo empregada?',
    alternativas: [
      "Hipérbole",
      "Metonímia",
      "Metáfora",
      "Eufemismo",
      "Antítese",
    ],
    correta: 2,
    explicacao:
      "Atribuir a ‘tempo’ a ação de ‘voar’ é uma metáfora (transferência de sentido).",
  },
  {
    id: "q5",
    enunciado:
      "Um carro percorre 150 km em 2 horas e 30 minutos. Qual é a sua velocidade média em km/h?",
    alternativas: ["50", "55", "60", "65", "75"],
    correta: 2,
    explicacao:
      "2 h 30 min = 2,5 h. v̄ = 150/2,5 = 60 km/h.",
  },
];

const SimuladoEnem = () => {
  const navigate = useNavigate();
  const [respostas, setRespostas] = useState({});
  const [enviado, setEnviado] = useState(false);

  const total = perguntas.length;
  const respondidas = Object.keys(respostas).length;

  const acertos = useMemo(() => {
    if (!enviado) return 0;
    return perguntas.reduce((sum, q) => {
      return sum + (respostas[q.id] === q.correta ? 1 : 0);
    }, 0);
  }, [enviado, respostas]);

  const porcentagem = useMemo(
    () => (enviado ? Math.round((acertos / total) * 100) : 0),
    [acertos, enviado, total]
  );

  const selecionar = (qId, idx) => {
    if (enviado) return;
    setRespostas((prev) => ({ ...prev, [qId]: idx }));
  };

  const enviar = (e) => {
    e.preventDefault();
    if (respondidas < total) {
      alert("Responda todas as questões antes de enviar.");
      return;
    }
    setEnviado(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const refazer = () => {
    setRespostas({});
    setEnviado(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-indigo-700">Mini Simulado ENEM</h1>
            <p className="text-gray-600">Responda às 5 questões e envie para ver sua nota e explicações.</p>
          </div>
          <button
            onClick={() => navigate("/simulados")}
            className="text-indigo-600 hover:text-indigo-800 underline"
          >
            Voltar para Simulados
          </button>
        </div>

        {/* Progresso */}
        <div className="mb-6 bg-white rounded-xl p-4 shadow flex items-center justify-between">
          <p className="text-gray-700">
            Progresso: <span className="font-semibold">{respondidas}</span> de{" "}
            <span className="font-semibold">{total}</span> respondidas
          </p>
          {enviado ? (
            <p className="text-gray-700">
              Nota: <span className="font-semibold">{acertos}</span> / {total} (
              <span className="font-semibold">{porcentagem}%</span>)
            </p>
          ) : (
            <p className="text-gray-500">Envie para ver o resultado</p>
          )}
        </div>

        <form onSubmit={enviar} className="space-y-6">
          {perguntas.map((q, idx) => {
            const selecionada = respostas[q.id];
            const acertou = enviado && selecionada === q.correta;
            const errou = enviado && selecionada !== q.correta;

            return (
              <div
                key={q.id}
                className={`bg-white rounded-xl shadow p-6 border ${
                  acertou
                    ? "border-green-300"
                    : errou
                    ? "border-red-300"
                    : "border-transparent"
                }`}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {idx + 1}. {q.enunciado}
                  </h3>
                </div>

                <div className="space-y-2">
                  {q.alternativas.map((alt, i) => {
                    const isSelecionada = selecionada === i;
                    const isCorreta = enviado && q.correta === i;
                    const showErro =
                      enviado && isSelecionada && selecionada !== q.correta;

                    return (
                      <label
                        key={i}
                        className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition
                          ${
                            isCorreta
                              ? "bg-green-50 border-green-300"
                              : showErro
                              ? "bg-red-50 border-red-300"
                              : "bg-white border-gray-200 hover:bg-gray-50"
                          }`}
                      >
                        <input
                          type="radio"
                          name={q.id}
                          className="mt-1"
                          checked={isSelecionada || false}
                          onChange={() => selecionar(q.id, i)}
                          disabled={enviado}
                        />
                        <span className="text-gray-800">{String.fromCharCode(65 + i)}) {alt}</span>
                      </label>
                    );
                  })}
                </div>

                {enviado && (
                  <div className="mt-4 text-sm">
                    <p className="text-gray-700">
                      Correta: <span className="font-semibold">
                        {String.fromCharCode(65 + q.correta)}) {q.alternativas[q.correta]}
                      </span>
                    </p>
                    <p className="text-gray-600 mt-1">{q.explicacao}</p>
                  </div>
                )}
              </div>
            );
          })}

          <div className="flex items-center gap-3 pt-2">
            {!enviado ? (
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition disabled:opacity-50"
                disabled={respondidas < total}
              >
                Enviar respostas
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={refazer}
                  className="bg-white text-indigo-600 border border-indigo-200 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition"
                >
                  Refazer simulado
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/simulados")}
                  className="text-gray-600 hover:text-gray-800 underline"
                >
                  Escolher outro simulado
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default SimuladoEnem;
