import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Subjects from "./components/Subjects";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AuthModals from "./components/AuthModals";

import LoginPage from "./pages/LoginPage";
import Simulados from "./components/Simulados";
import SimuladoEnem from "./components/SimuladoEnem";
import SubjectsPage from "./pages/SubjectsPage";

import PlansPage from "./pages/PlansPage";
import PlanoEnem from "./pages/PlanoEnem";
import PlanoFuvest from "./pages/PlanoFuvest";
import PlanoUnicamp from "./pages/PlanoUnicamp";

const App = () => {
  return (
    <Router>
      <div className="App font-sans">
        <Navbar />

        <Routes>
          {/* Página inicial */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Subjects />
                <Plans />
                <Testimonials />
                <CTA />
              </>
            }
          />

          {/* Página de matérias */}
          <Route path="/materias" element={<SubjectsPage />} />

          {/* Página de simulados */}
          <Route path="/simulados" element={<Simulados />} />
          <Route path="/simulados/enem" element={<SimuladoEnem />} />

          {/* Lista de planos */}
          <Route path="/planos" element={<PlansPage />} />

          {/* Páginas de planos detalhados */}
          <Route path="/planos/enem" element={<PlanoEnem />} />
          <Route path="/planos/fuvest" element={<PlanoFuvest />} />
          <Route path="/planos/unicamp" element={<PlanoUnicamp />} />

          {/* Login */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
