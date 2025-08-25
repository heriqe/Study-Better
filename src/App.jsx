import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Subjects from "./components/Subjects";
import Simulados from "./components/Simulados";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Modals from "./components/Modals";

const App = () => {
  return (
    <div className="App font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Seção de Matérias */}
      <Subjects />

      {/* Seção de Simulados */}
      <Simulados />

      {/* Seção de Planos */}
      <Plans />

      {/* Depoimentos */}
      <Testimonials />

      {/* Call to Action */}
      <CTA />

      {/* Footer */}
      <Footer />

      {/* Modais de Login/Cadastro */}
      <Modals />
    </div>
  );
};

export default App;
