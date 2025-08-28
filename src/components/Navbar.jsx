import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    setCurrentUser(user ? JSON.parse(user) : null);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    alert("Você saiu da sua conta.");
    navigate("/");
  };

  return (
    <nav
      className="text-white p-4 flex justify-between items-center shadow relative"
      style={{ backgroundColor: "#061d41" }}
    >
      {/* Logo / Nome */}
      <div
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Study Better
      </div>

      {/* Links */}
      <ul className="flex space-x-6">
        <li>
          <button
            onClick={() => navigate("/")}
            className="hover:text-[#47a5df] transition"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/materias")}
            className="hover:text-[#47a5df] transition"
          >
            Matérias
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/simulados")}
            className="hover:text-[#47a5df] transition"
          >
            Simulados
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/planos")}
            className="hover:text-[#47a5df] transition"
          >
            Planos
          </button>
        </li>
      </ul>

      {/* Usuário / Login */}
      <div className="relative" ref={menuRef}>
        {currentUser ? (
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-white text-[#061d41] px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              {currentUser?.name?.split(" ")[0]}
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-50">
                <button
                  onClick={() => navigate("/meus-planos")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  Meus Planos de Estudo
                </button>
                <button
                  onClick={() => navigate("/meus-simulados")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  Meus Simulados
                </button>
                <button
                  onClick={() => navigate("/configuracoes")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  Configurações
                </button>
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                >
                  Sair
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 rounded-lg font-medium transition"
            style={{ backgroundColor: "#47a5df", color: "#061d41" }}
          >
            Entrar
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
