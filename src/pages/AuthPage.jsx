import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // true = Login, false = Cadastro
  const [user, setUser] = useState({ username: "", email: "", password: "", confirm: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const login = () => {
    const stored = JSON.parse(localStorage.getItem("studyUser"));
    if (!stored || stored.email !== user.email || stored.password !== user.password) {
      alert("Email ou senha incorretos!");
      return;
    }
    localStorage.setItem("studyLogged", JSON.stringify(stored));
    alert(`Bem-vindo, ${stored.username}!`);
    navigate("/");
  };

  const register = () => {
    if (!user.username || !user.email || !user.password || user.password !== user.confirm) {
      alert("Preencha todos os campos corretamente!");
      return;
    }
    localStorage.setItem("studyUser", JSON.stringify({ username: user.username, email: user.email, password: user.password }));
    alert("Cadastro realizado!");
    setIsLogin(true); // volta para o login após cadastro
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-50">
      {/* Topo */}
      <div className="w-full flex items-center p-4 bg-indigo-600 text-white">
        <button onClick={() => navigate("/")} className="mr-4 text-xl">←</button>
        <h1 className="text-2xl font-bold">Study Better</h1>
      </div>

      {/* Abas */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 mt-6">
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 rounded-t-lg ${isLogin ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 rounded-t-lg ${!isLogin ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
          >
            Cadastro
          </button>
        </div>

        {isLogin ? (
          // Formulário de Login
          <div>
            <input
              name="email"
              placeholder="Email"
              type="email"
              className="w-full p-2 mb-3 border rounded"
              onChange={handleChange}
            />
            <input
              name="password"
              placeholder="Senha"
              type="password"
              className="w-full p-2 mb-3 border rounded"
              onChange={handleChange}
            />
            <button
              onClick={login}
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
            >
              Entrar
            </button>
          </div>
        ) : (
          // Formulário de Cadastro
          <div>
            <input
              name="username"
              placeholder="Nome"
              className="w-full p-2 mb-3 border rounded"
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="Email"
              type="email"
              className="w-full p-2 mb-3 border rounded"
              onChange={handleChange}
            />
            <input
              name="password"
              placeholder="Senha"
              type="password"
              className="w-full p-2 mb-3 border rounded"
              onChange={handleChange}
            />
            <input
              name="confirm"
              placeholder="Confirmar Senha"
              type="password"
              className="w-full p-2 mb-3 border rounded"
              onChange={handleChange}
            />
            <button
              onClick={register}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Cadastrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
