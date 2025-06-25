import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Subjects from './components/Subjects'
import Tests from './components/Tests'
import StudyPlan from './components/StudyPlan'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingButton from './components/FloatingButton'
import Login from './components/Login'
import MateriasPage from './pages/MateriasPage'
import SimuladosPage from './pages/SimuladosPage'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Stats />
            <Subjects />
            <Tests />
            <StudyPlan />
            <Testimonials />
            <CTA />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/materias" element={<MateriasPage />} />
        <Route path="/simulados" element={<SimuladosPage />} />
      </Routes>
      <Footer />
      <FloatingButton />
    </div>
  )
}

export default App