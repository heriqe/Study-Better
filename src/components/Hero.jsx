import { useContext } from 'react'
import { LoginContext } from './LoginContext.jsx'

export default function Hero() {
  const { setShowLogin } = useContext(LoginContext)

  return (
    <div className="hero-gradient text-white py-20 px-4 text-center">
      <h1 className="text-5xl font-extrabold mb-6">Prepare-se para o ENEM com o Study Better</h1>
      <p className="max-w-xl mx-auto mb-8 text-lg">
        O melhor plano de estudos personalizado para você garantir a aprovação nos vestibulares.
      </p>
      <button
        onClick={() => setShowLogin(true)}
        className="bg-white text-indigo-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
      >
        Começar agora
      </button>
    </div>
  )
}
