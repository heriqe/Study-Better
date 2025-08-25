import React, { useState } from "react";

const Modals = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "", confirm: "" });
  
  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const register = () => {
    if (!user.username || !user.email || !user.password || user.password !== user.confirm) {
      alert("Preencha todos os campos corretamente!");
      return;
    }
    localStorage.setItem("studyUser", JSON.stringify({ username: user.username, email: user.email, password: user.password }));
    alert("Cadastro realizado!");
    document.getElementById("login-modal").classList.add("hidden");
  };

  const login = () => {
    const stored = JSON.parse(localStorage.getItem("studyUser"));
    if (!stored || stored.email !== user.email || stored.password !== user.password) {
      alert("Email ou senha incorretos!");
      return;
    }
    localStorage.setItem("studyLogged", JSON.stringify(stored));
    alert(`Bem-vindo, ${stored.username}!`);
    document.getElementById("login-modal").classList.add("hidden");
    window.location.reload();
  };

  return (
    <div id="login-modal" className="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-96">
        <h2 className="text-2xl font-bold mb-4">Login / Cadastro</h2>
        <input name="username" placeholder="Nome" className="w-full p-2 mb-3 border rounded" onChange={handleChange} />
        <input name="email" placeholder="Email" type="email" className="w-full p-2 mb-3 border rounded" onChange={handleChange} />
        <input name="password" placeholder="Senha" type="password" className="w-full p-2 mb-3 border rounded" onChange={handleChange} />
        <input name="confirm" placeholder="Confirmar Senha" type="password" className="w-full p-2 mb-3 border rounded" onChange={handleChange} />
        <div className="flex justify-between">
          <button onClick={login} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">Login</button>
          <button onClick={register} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Cadastrar</button>
          <button onClick={() => document.getElementById("login-modal").classList.add("hidden")} className="px-4 py-2 rounded border hover:bg-gray-100 transition">Fechar</button>
        </div>
      </div>
    </div>
  );
};

export default Modals;
