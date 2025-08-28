// src/pages/PlanoEnem.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaClock, FaCalendarAlt, FaBook, FaRedo, FaLightbulb } from "react-icons/fa";

const PlanoEnem = () => {
  return (
    <div className="App font-sans">
      <main className="pt-24 bg-gray-50 min-h-screen px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#061d41] mb-10">
            Plano de Estudos para o ENEM (3 a 6 meses)
          </h1>

          {/* Organização Geral */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaClock className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">⏳ Organização Geral</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Tempo diário: 3 a 5 horas (pausas de 10 min a cada 50 min)</li>
              <li>6 dias de estudo + 1 dia para descanso/revisão leve</li>
              <li>Estratégia: 70% teoria + questões, 20% revisão, 10% redação</li>
            </ul>
          </div>

          {/* Divisão Semanal */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaCalendarAlt className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">🗓️ Divisão Semanal</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Segunda → Matemática + Redação</li>
              <li>Terça → Ciências da Natureza (Física/Química)</li>
              <li>Quarta → Ciências Humanas (História/Geografia)</li>
              <li>Quinta → Matemática + Biologia</li>
              <li>Sexta → Linguagens</li>
              <li>Sábado → Revisão + Simulado (90 questões)</li>
            </ul>
          </div>

          {/* Estrutura do Estudo Diário */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaBook className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">📌 Estrutura do Estudo Diário</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Aquecimento (10 min) → revisar resumos/anotações do dia anterior</li>
              <li>Bloco 1 (50 min) → Estudo teórico</li>
              <li>Bloco 2 (50 min) → Resolução de questões</li>
              <li>Bloco 3 (50 min) → Segundo tema do dia + exercícios</li>
              <li>Redação (1h, 2x semana) → treino e leitura de temas</li>
              <li>Revisão rápida (20 min) → flashcards, mapas mentais ou resumo</li>
            </ul>
          </div>

          {/* Conteúdos-Chave */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">📖 Conteúdos-Chave do ENEM</h2>
            <p className="font-semibold">Matemática</p>
            <ul className="list-disc ml-6">
              <li>Funções, porcentagem, probabilidade, geometria, PA/PG</li>
            </ul>
            <p className="font-semibold mt-4">Ciências da Natureza</p>
            <ul className="list-disc ml-6">
              <li>Física: Cinemática, Leis de Newton, energia, eletricidade</li>
              <li>Química: Ligações, estequiometria, soluções, orgânica</li>
              <li>Biologia: Ecologia, genética, citologia, evolução</li>
            </ul>
            <p className="font-semibold mt-4">Ciências Humanas</p>
            <ul className="list-disc ml-6">
              <li>História do Brasil e Geral, Geografia, Sociologia, Filosofia</li>
            </ul>
            <p className="font-semibold mt-4">Linguagens</p>
            <ul className="list-disc ml-6">
              <li>Interpretação, Literatura, Gramática, Inglês/Espanhol</li>
            </ul>
          </div>

          {/* Revisão */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaRedo className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">📆 Revisão</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Domingo: revisar resumos e questões erradas</li>
              <li>Simulado completo a cada 3 semanas</li>
              <li>Método de revisão espaçada (1, 7 e 30 dias)</li>
            </ul>
          </div>

          {/* Dicas Extras */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaLightbulb className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">🎯 Dicas Extras</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Resolva questões anteriores do ENEM</li>
              <li>Monte resumos próprios</li>
              <li>Treine redação regularmente</li>
              <li>Pratique com tempo cronometrado</li>
              <li>Cuide do sono e da saúde mental</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlanoEnem;
