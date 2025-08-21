import { createContext, useState, useEffect } from 'react'

export const LoginContext = createContext()

export function LoginProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const savedUser = localStorage.getItem('loggedUser')
    if (savedUser) setUser(JSON.parse(savedUser))
  }, [])

  function login(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || []
    const foundUser = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    )
    if (foundUser) {
      setUser(foundUser)
      localStorage.setItem('loggedUser', JSON.stringify(foundUser))
      return true
    }
    return false
  }

  function logout() {
    setUser(null)
    localStorage.removeItem('loggedUser')
  }

  function register(username, email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || []
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return false // email já existe
    }
    const newUser = { username, email, password }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    setUser(newUser)
    localStorage.setItem('loggedUser', JSON.stringify(newUser))
    return true
  }

  return (
    <LoginContext.Provider value={{ user, login, logout, register }}>
      {children}
    </LoginContext.Provider>
  )
}
