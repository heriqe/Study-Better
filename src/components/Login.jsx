import { useState } from 'react'

export default function Login({ onClose, onLoginSuccess }) {
  const [mode, setMode] = useState('login') // 'login' ou 'register'
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  function handleLoginSubmit(e) {
    e.preventDefault()
    setError('')

    const usersJSON = localStorage.getItem('users')
    const users = usersJSON ? JSON.parse(usersJSON) : []

    const user = users.find(u => u.email === email && u.password === password)
    if (user) {
      onLoginSuccess(user)
    } else {
      setError('Email ou senha inválidos.')
    }
  }

  function handleRegisterSubmit(e) {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.')
      return
    }

    let users = []
    const usersJSON = localStorage.getItem('users')
    if (usersJSON) users = JSON.parse(usersJSON)

    const userExists = users.some(u => u.email === email)
    if (userExists) {
      setError('Já existe uma conta com esse email.')
      return
    }

    const newUser = { username, email, password }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    onLoginSuccess(newUser)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Fechar"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        {mode === 'login' ? (
          <>
            <h2 className="text-2xl font-bold mb-6">Entrar</h2>
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Entrar
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Não tem uma conta?{' '}
              <button
                onClick={() => {
                  setMode('register')
                  setError('')
                }}
                className="text-indigo-600 hover:underline"
              >
                Criar conta
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6">Criar Conta</h2>
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nome de usuário"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <input
                type="password"
                placeholder="Confirmar senha"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Criar conta
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Já tem uma conta?{' '}
              <button
                onClick={() => {
                  setMode('login')
                  setError('')
                }}
                className="text-indigo-600 hover:underline"
              >
                Entrar
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
