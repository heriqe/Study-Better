export default function MateriasPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Todas as Matérias</h1>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>Matemática:</strong> Figuras Planas, Álgebra, Estatística</li>
          <li><strong>Português:</strong> Escolas Literárias, Gramática, Interpretação</li>
          <li><strong>Ciências da Natureza:</strong> Física, Química, Biologia</li>
          <li><strong>Humanas:</strong> História, Geografia, Filosofia</li>
        </ul>
      </div>
    </div>
  )
}
