import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

const materias = [
  { name: 'Matemática', topics: ['Figuras Planas', 'Álgebra', 'Funções'] },
  { name: 'Português', topics: ['Escolas Literárias', 'Gramática', 'Interpretação de Texto'] },
  { name: 'História', topics: ['Brasil Colônia', 'Era Vargas', 'Ditadura Militar'] },
  { name: 'Química', topics: ['Tabela Periódica', 'Reações Químicas'] },
]

export default function Materias() {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Matérias</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {materias.map((materia, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">{materia.name}</h2>
              <ul className="list-disc list-inside mb-4">
                {materia.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
              <Link to={`/materias/${materia.name.toLowerCase()}`} className="text-indigo-600 hover:underline">
                Ver detalhes
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
