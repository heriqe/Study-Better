import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center max-w-7xl mx-auto">
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        Study Better
      </Link>
      <div>
        <Link to="/materias" className="mr-6 text-gray-700 hover:text-indigo-600">Matérias</Link>
        <Link to="/simulados" className="mr-6 text-gray-700 hover:text-indigo-600">Simulados</Link>
        {!user ? (
          <Link to="/login" className="text-indigo-600 font-semibold hover:underline">Entrar</Link>
        ) : (
          <>
            <span className="mr-4 text-gray-700">Olá, {user.username}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Sair
            </button>
          </>
        )}
      </div>
    </nav>
  )
}
