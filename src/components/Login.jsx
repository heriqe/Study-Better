import { useState } from 'react'

export default function Login({ onClose, onLoginSuccess }) {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ username: '', email: '', password: '', confirmPassword: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    if (mode === 'login') {
      const user = users.find(u => u.email === form.email && u.password === form.password)
      return user ? onLoginSuccess(user) : setError('Email ou senha inválidos.')
    }
    if (form.password !== form.confirmPassword) return setError('Senhas não coincidem.')
    if (users.some(u => u.email === form.email)) return setError('Email já cadastrado.')
    const newUser = { username: form.username, email: form.email, password: form.password }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    onLoginSuccess(newUser)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          <i className="fas fa-times"></i>
        </button>
        <h2 className="text-xl font-bold mb-4">{mode === 'login' ? 'Entrar' : 'Criar Conta'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <input name="username" placeholder="Nome de usuário" required onChange={handleChange}
              className="w-full p-2 border rounded" />
          )}
          <input name="email" type="email" placeholder="Email" required onChange={handleChange}
            className="w-full p-2 border rounded" />
          <input name="password" type="password" placeholder="Senha" required onChange={handleChange}
            className="w-full p-2 border rounded" />
          {mode === 'register' && (
            <input name="confirmPassword" type="password" placeholder="Confirmar senha" required onChange={handleChange}
              className="w-full p-2 border rounded" />
          )}
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            {mode === 'login' ? 'Entrar' : 'Criar conta'}
          </button>
        </form>
        <p className="mt-3 text-center text-sm">
          {mode === 'login' ? 'Não tem conta?' : 'Já tem conta?'}{' '}
          <button onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError('') }}
            className="text-indigo-600 hover:underline">
            {mode === 'login' ? 'Criar conta' : 'Entrar'}
          </button>
        </p>
      </div>
    </div>
  )
}
