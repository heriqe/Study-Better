// src/components/AuthModals.jsx
import React, { useState, useEffect } from "react";

const AuthModals = ({ autoOpen = false }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  useEffect(() => {
    checkAuthStatus();
  }, []);

  useEffect(() => {
    if (autoOpen) openLogin();
  }, [autoOpen]);

  const checkAuthStatus = () => {
    const user = localStorage.getItem("currentUser");
    setCurrentUser(user ? JSON.parse(user) : null);
  };

  const openLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const openRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const closeModals = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleLoginChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleRegisterChange = (e) =>
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });

  const login = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) =>
        u.email === loginData.email && u.password === loginData.password
    );
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      checkAuthStatus();
      closeModals();
      alert("Login realizado com sucesso!");
    } else {
      alert("Email ou senha incorretos.");
    }
  };

  const register = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirm) {
      alert("As senhas não coincidem.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((u) => u.email === registerData.email)) {
      alert("Este email já está cadastrado.");
      return;
    }
    const newUser = {
      name: registerData.name,
      email: registerData.email,
      password: registerData.password,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    checkAuthStatus();
    closeModals();
    alert("Cadastro realizado com sucesso! Você já está logado.");
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    alert("Você saiu da sua conta.");
  };

  return (
    <>
      {/* Botão Entrar / Sair */}
      <div id="auth-buttons">
        {currentUser ? (
          <div className="flex items-center space-x-4">
            <span className="hidden md:block invisible">placeholder</span>
            <button
              onClick={logout}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50 transition"
            >
              Sair
            </button>
          </div>
        ) : (
          <button
            onClick={openLogin}
            className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50 transition"
          >
            Entrar
          </button>
        )}
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Entrar</h3>
              <button
                onClick={closeModals}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form onSubmit={login} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Senha</label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Entrar
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Não tem uma conta?{" "}
                <button
                  onClick={openRegister}
                  className="text-indigo-600 font-medium hover:text-indigo-800"
                >
                  Cadastre-se
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegister && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Cadastre-se</h3>
              <button
                onClick={closeModals}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form onSubmit={register} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Nome completo</label>
                <input
                  type="text"
                  name="name"
                  value={registerData.name}
                  onChange={handleRegisterChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Senha</label>
                <input
                  type="password"
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Confirmar senha</label>
                <input
                  type="password"
                  name="confirm"
                  value={registerData.confirm}
                  onChange={handleRegisterChange} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Cadastrar
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Já tem uma conta?{" "}
                <button
                  onClick={openLogin}
                  className="text-indigo-600 font-medium hover:text-indigo-800"
                >
                  Entrar
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthModals;
