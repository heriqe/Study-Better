import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaClock, FaCalendarAlt, FaBook, FaRedo, FaLightbulb } from "react-icons/fa";

const PlanoFuvest = () => {
  return (
    <div className="App font-sans">
      <main className="pt-24 bg-gray-50 min-h-screen px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#061d41] mb-6">
            Plano de Estudos para a FUVEST (3 a 6 meses)
          </h1>
          <p className="text-gray-700 text-lg mb-10 text-center">
            Criado pela equipe <strong>Study Better</strong>, este plano é ideal para candidatos que buscam aprovação na FUVEST.
            Estruturado para aprofundar conhecimentos nas disciplinas-chave e praticar com questões no formato da prova, 
            aumentando as chances de sucesso.
          </p>

          {/* Organização Geral */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaClock className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">⏳ Organização Geral</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Tempo diário: 4 a 6 horas</li>
              <li>6 dias de estudo + 1 dia para descanso/revisão</li>
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
              <li>Terça → Física + Química</li>
              <li>Quarta → História + Geografia</li>
              <li>Quinta → Matemática + Biologia</li>
              <li>Sexta → Língua Portuguesa + Literatura</li>
              <li>Sábado → Revisão + Simulado</li>
            </ul>
          </div>

          {/* Estrutura do Estudo Diário */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaBook className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">📌 Estrutura do Estudo Diário</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Aquecimento (10 min) → revisar resumos</li>
              <li>Bloco 1 (50 min) → Teoria</li>
              <li>Bloco 2 (50 min) → Questões</li>
              <li>Bloco 3 (50 min) → Outro tema + exercícios</li>
              <li>Redação: 1h, 2x semana</li>
              <li>Revisão rápida: 20 min</li>
            </ul>
          </div>

          {/* Conteúdos-Chave */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">📖 Conteúdos-Chave</h2>
            <p className="font-semibold">Matemática</p>
            <ul className="list-disc ml-6">
              <li>Álgebra, Geometria, Funções, Probabilidade, Cálculo</li>
            </ul>
            <p className="font-semibold mt-4">Física</p>
            <ul className="list-disc ml-6">
              <li>Cinemática, Leis de Newton, Termodinâmica, Óptica, Eletricidade</li>
            </ul>
            <p className="font-semibold mt-4">Química</p>
            <ul className="list-disc ml-6">
              <li>Geral, Estequiometria, Orgânica, Soluções, Bioquímica</li>
            </ul>
            <p className="font-semibold mt-4">Biologia</p>
            <ul className="list-disc ml-6">
              <li>Genética, Fisiologia, Ecologia</li>
            </ul>
            <p className="font-semibold mt-4">Humanas e Literatura</p>
            <ul className="list-disc ml-6">
              <li>História, Geografia, Gramática, Movimentos Literários</li>
            </ul>
          </div>

          {/* Revisão */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaRedo className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">📆 Revisão</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Domingo: revisão geral</li>
              <li>A cada 3 semanas: simulados completos</li>
              <li>Revisão mensal: técnicas de revisão espaçada</li>
            </ul>
          </div>

          {/* Dicas Extras */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaLightbulb className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">🎯 Dicas Extras</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Resolva provas anteriores</li>
              <li>Pratique redações sobre temas atuais</li>
              <li>Invista em interpretação de texto</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlanoFuvest;
