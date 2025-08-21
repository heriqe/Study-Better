import { useState } from "react";
import simuladoData from "../assets/simuladoEnem.json";

export default function Simulado() {
  const [idx, setIdx] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const pergunta = simuladoData[idx];

  function handleSelect(resp) {
    setRespostas([...respostas, resp]);
    if (idx + 1 < simuladoData.length) setIdx(idx + 1);
    else setShowResult(true);
  }

  function calcScore() {
    return respostas.filter((r, i) => r === simuladoData[i].correta).length;
  }

  function restart() {
    setIdx(0);
    setRespostas([]);
    setShowResult(false);
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      {!showResult ? (
        <>
          <h2 className="text-xl font-bold mb-4">
            Pergunta {idx + 1} de {simuladoData.length}
          </h2>
          <p className="mb-4">{pergunta.pergunta}</p>
          <div className="space-y-2">
            {pergunta.alternativas.map((alt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(alt)}
                className="w-full text-left px-4 py-2 border rounded hover:bg-indigo-100"
              >
                {alt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600">Simulado concluído!</h2>
          <p className="mt-4 text-lg">Você acertou {calcScore()} de {simuladoData.length}!</p>
          <button
            onClick={restart}
            className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Refazer Simulado
          </button>
        </div>
      )}
    </div>
  );
}
