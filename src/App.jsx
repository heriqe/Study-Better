import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Materias from './pages/Materias'
import NotFound from './pages/NotFound'
import Login from './components/Login'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/materias" element={<Materias />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
