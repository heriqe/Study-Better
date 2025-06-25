import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login.jsx'

export default function Nav() {
  const [user, setUser] = useState(null)
  const [showLogin, setShowLogin] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('currentUser')
    if (stored) setUser(JSON.parse(stored))
  }, [])

  const handleLoginSuccess = (u) => {
    setUser(u)
    localStorage.setItem('currentUser', JSON.stringify(u))
    setShowLogin(false)
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('currentUser')
  }

  return (
    <>
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center">
              <i className="fas fa-brain text-indigo-600 text-2xl mr-2"></i>
              <span className="text-xl font-bold text-indigo-600">Study Better</span>
            </Link>
            <div className="hidden sm:flex sm:space-x-4">
              <Link to="/" className="text-gray-700 hover:text-indigo-600">Início</Link>
              <Link to="/materias" className="text-gray-700 hover:text-indigo-600">Matérias</Link>
              <Link to="/simulados" className="text-gray-700 hover:text-indigo-600">Simulados</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-indigo-600 font-medium">{user.username}</span>
                <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded text-sm text-white">
                  Sair
                </button>
              </>
            ) : (
              <button onClick={() => setShowLogin(true)} className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-700">
                Entrar
              </button>
            )}
          </div>
        </div>
      </nav>
      {showLogin && <Login onClose={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} />}
    </>
  )
}
