import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaClock, FaCalendarAlt, FaBook, FaRedo, FaLightbulb } from "react-icons/fa";

const PlanoTech = () => {
  return (
    <div className="App font-sans">
      <main className="pt-24 bg-gray-50 min-h-screen px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#061d41] mb-10">
            Plano de Estudos para Carreiras Tech (3 a 6 meses)
          </h1>

          {/* Organização Geral */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaClock className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">⏳ Organização Geral</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Tempo diário: 2 a 4 horas (com pausas de 10 min a cada 50 min)</li>
              <li>6 dias de estudo + 1 dia para descanso ou revisão leve</li>
              <li>Estratégia: 40% fundamentos, 30% prática, 20% algoritmos, 10% complementares</li>
            </ul>
          </div>

          {/* Divisão Semanal */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaCalendarAlt className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">🗓️ Divisão Semanal</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Segunda → Lógica de Programação + Algoritmos</li>
              <li>Terça → JavaScript ou Python (básico ao intermediário)</li>
              <li>Quarta → HTML + CSS</li>
              <li>Quinta → Banco de Dados (SQL + NoSQL)</li>
              <li>Sexta → Programação Orientada a Objetos</li>
              <li>Sábado → Projeto prático + revisão</li>
            </ul>
          </div>

          {/* Estrutura do Estudo Diário */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaBook className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">📌 Estrutura do Estudo Diário</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Aquecimento (10 min): revisar anotações do dia anterior</li>
              <li>Bloco 1 (50 min): estudo teórico</li>
              <li>Bloco 2 (50 min): prática com exercícios ou desafios</li>
              <li>Bloco 3 (50 min): desenvolvimento de projeto</li>
              <li>Revisão rápida (20 min): anotações, flashcards, refatoração de código</li>
            </ul>
          </div>

          {/* Conteúdos-Chave */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">📖 Conteúdos-Chave</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Fundamentos de programação e lógica</li>
              <li>HTML5, CSS3 e JavaScript</li>
              <li>Python (automação, análise de dados)</li>
              <li>Bancos de dados relacionais e não relacionais</li>
              <li>Git e GitHub</li>
              <li>Estruturas de dados e algoritmos</li>
              <li>Desenvolvimento web (React ou Node.js)</li>
              <li>Boas práticas de código e testes</li>
            </ul>
          </div>

          {/* Revisão */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaRedo className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">📆 Revisão</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Domingo: revisão geral da semana</li>
              <li>Revisão de código e otimização de projetos</li>
              <li>Simulados de lógica e desafios práticos</li>
            </ul>
          </div>

          {/* Dicas Extras */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaLightbulb className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">🎯 Dicas Extras</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Construa um portfólio no GitHub</li>
              <li>Participe de desafios de programação online</li>
              <li>Estude inglês técnico</li>
              <li>Mantenha-se atualizado com tecnologias do mercado</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlanoTech;
