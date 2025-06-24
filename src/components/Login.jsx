import { useState, useEffect } from 'react'

export default function Login({ onLogin }) {
  const [mode, setMode] = useState('login') // 'login' ou 'register'
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find(u => u.email === form.email && u.password === form.password)
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user))
      onLogin(user)
    } else {
      setError('Email ou senha incorretos.')
    }
  }

  const handleRegister = (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      return setError('As senhas não coincidem.')
    }
    const users = JSON.parse(localStorage.getItem('users')) || []
    if (users.find(u => u.email === form.email)) {
      return setError('Já existe uma conta com este email.')
    }

    const newUser = {
      username: form.username,
      email: form.email,
      password: form.password
    }

    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    localStorage.setItem('loggedInUser', JSON.stringify(newUser))
    onLogin(newUser)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          {mode === 'login' ? 'Entrar' : 'Criar Conta'}
        </h2>
        <form onSubmit={mode === 'login' ? handleLogin : handleRegister} className="space-y-4">
          {mode === 'register' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nome de usuário</label>
                <input type="text" name="username" required value={form.username} onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
              </div>
            </>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" required value={form.email} onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Senha</label>
            <input type="password" name="password" required value={form.password} onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirme a senha</label>
              <input type="password" name="confirmPassword" required value={form.confirmPassword} onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
          )}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
            {mode === 'login' ? 'Entrar' : 'Criar conta'}
          </button>
        </form>
        <div className="mt-4 text-sm text-center">
          {mode === 'login' ? (
            <>
              <span>Não tem conta? </span>
              <button onClick={() => { setMode('register'); setError('') }} className="text-indigo-600 hover:underline">
                Criar conta
              </button>
            </>
          ) : (
            <>
              <span>Já tem conta? </span>
              <button onClick={() => { setMode('login'); setError('') }} className="text-indigo-600 hover:underline">
                Entrar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
