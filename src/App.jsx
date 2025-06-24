import { useState, useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Subjects from './components/Subjects.jsx'
import Tests from './components/Tests.jsx'
import StudyPlan from './components/StudyPlan.jsx'
import Testimonials from './components/Testimonials.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import FloatingButton from './components/FloatingButton.jsx'
import Login from './components/Login.jsx'

function App() {
  const [user, setUser] = useState(null)
  const [showLogin, setShowLogin] = useState(false)

  const handleLogin = (userData) => {
    setUser(userData)
    localStorage.setItem('currentUser', JSON.stringify(userData))
  }

  useEffect(() => {
    const stored = localStorage.getItem('currentUser')
    if (stored) setUser(JSON.parse(stored))
  }, [])

  return (
    <div>
      <Nav user={user} onLoginClick={() => setShowLogin(true)} />
      <Hero />
      <Stats />
      <Subjects />
      <Tests />
      <StudyPlan />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingButton />
      {showLogin && (
        <Login
          onLogin={handleLogin}
          onClose={() => setShowLogin(false)}
        />
      )}
    </div>
  )
}

export default App
