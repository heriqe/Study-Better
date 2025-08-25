import React from "react";

const Hero = () => (
  <section id="home" className="pt-24 pb-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0 fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Prepare-se para o ENEM e vestibulares
        </h1>
        <p className="text-xl mb-8">
          Conteúdos estruturados, simulados reais e planos de estudo personalizados para você alcançar sua melhor performance.
        </p>
        <button
          onClick={() => document.getElementById("login-modal").classList.remove("hidden")}
          className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-indigo-100 transition transform hover:scale-105"
        >
          Começar agora
        </button>
      </div>
      <div className="md:w-1/2 fade-in">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          alt="Estudante se preparando"
          className="rounded-xl shadow-2xl w-full max-w-lg mx-auto"
        />
      </div>
    </div>
  </section>
);

export default Hero;
