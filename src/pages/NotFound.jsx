import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="text-center mt-20">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Página não encontrada</p>
        <Link
          to="/"
          className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          Voltar para Home
        </Link>
      </div>
    </>
  );
}
