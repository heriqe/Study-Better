import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(user);
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    checkAuthStatus();
    alert("Você saiu da sua conta.");
  };

  return (
    <nav className="fixed w-full bg-indigo-600 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold flex items-center">
          <i className="fas fa-book-open mr-2"></i> StudyBetter
        </a>

        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-indigo-200 transition">Home</a>
          <a href="#materias" className="hover:text-indigo-200 transition">Matérias</a>
          <a href="#simulados" className="hover:text-indigo-200 transition">Simulados</a>
          <a href="#planos" className="hover:text-indigo-200 transition">Planos</a>
        </div>

        <div className="hidden md:flex">
          {currentUser ? (
            <div className="flex items-center space-x-4">
              <span>Olá, {currentUser.name.split(" ")[0]}</span>
              <button
                onClick={logout}
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50 transition"
              >
                Sair
              </button>
            </div>
          ) : (
            <button
              onClick={() => document.getElementById("login-modal").classList.remove("hidden")}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50 transition"
            >
              Entrar
            </button>
          )}
        </div>

        <button
          className="md:hidden text-white text-xl focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-indigo-700 px-4 py-2">
          <a href="#home" className="block py-2 hover:text-indigo-200 transition">Home</a>
          <a href="#materias" className="block py-2 hover:text-indigo-200 transition">Matérias</a>
          <a href="#simulados" className="block py-2 hover:text-indigo-200 transition">Simulados</a>
          <a href="#planos" className="block py-2 hover:text-indigo-200 transition">Planos</a>
          {!currentUser && (
            <button
              onClick={() => document.getElementById("login-modal").classList.remove("hidden")}
              className="w-full bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50 transition mt-2"
            >
              Entrar
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
