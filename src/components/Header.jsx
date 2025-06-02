import React from "react";
import logo from "../assets/logo.jpg"; 

const Header = () => {
  return (
    <header className="bg-orange-500 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Casa do Micro-ondas"
            className="h-10 w-auto"
          />
          <span className="text-xl font-semibold">Casa do Micro-ondas</span>
        </div>

        {/* Navegação */}
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#servicos" className="hover:underline">
            Serviços
          </a>
          <a href="#marcas" className="hover:underline">
            Marcas
          </a>
          <a href="#contato" className="hover:underline">
            Contato
          </a>
        </nav>

        {/* Botão de Ação */}
        <div>
          <a
            href="#conserto-rapido"
            className="bg-white text-orange-600 font-bold py-2 px-4 rounded-md hover:bg-orange-100 transition"
          >
            Conserto em 30 Minutos
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
