import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleRegister = () => {
    setError('')
    if (!username || !email || !password || !confirmPassword) {
      setError('Preencha todos os campos.')
      return
    }
    if (password !== confirmPassword) {
      setError('As senhas não conferem.')
      return
    }

    const users = JSON.parse(localStorage.getItem('users')) || []

    if (users.find(u => u.email === email)) {
      setError('Email já cadastrado.')
      return
    }

    const newUser = { username, email, password }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    localStorage.setItem('user', JSON.stringify(newUser))
    navigate('/')
  }

  const handleLogin = () => {
    setError('')
    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find(u => u.email === email && u.password === password)
    if (!user) {
      setError('Email ou senha inválidos.')
      return
    }
    localStorage.setItem('user', JSON.stringify(user))
    navigate('/')
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">{isRegistering ? 'Criar Conta' : 'Entrar'}</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        {isRegistering && (
          <input
            type="text"
            placeholder="Nome de usuário"
            className="w-full mb-4 p-2 border rounded"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {isRegistering && (
          <input
            type="password"
            placeholder="Confirme a senha"
            className="w-full mb-4 p-2 border rounded"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        )}
        <button
          onClick={isRegistering ? handleRegister : handleLogin}
          className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition"
        >
          {isRegistering ? 'Criar Conta' : 'Entrar'}
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          {isRegistering ? 'Já tem conta?' : 'Não tem conta?'}{' '}
          <button
            onClick={() => {
              setError('')
              setIsRegistering(!isRegistering)
            }}
            className="text-indigo-600 hover:underline"
          >
            {isRegistering ? 'Entrar' : 'Criar conta'}
          </button>
        </p>
      </div>
    </div>
  )
}
