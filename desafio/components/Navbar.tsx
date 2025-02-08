"use client"

import { useState } from "react";

export function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <nav className="bg-white shadow-md px-3 lg:px-0">
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="/" className="navbar-brand ml-4">
            <img src="/logo-laranja.svg" alt="Logo" width="140" height="34" />
          </a>      
          <div className="hidden md:flex md:items-center md:space-x-6">
            <ul className="flex space-x-6">
              <li><a href="/" className="text-gray-600 hover:text-gray-800">Imobiliárias</a></li>
              <li><a href="/" className="text-gray-600 hover:text-gray-800">Quero me associar</a></li>
              <li className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-gray-600 hover:text-gray-800 focus:outline-none">Sobre ▼</button>
                {dropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md overflow-hidden">
                    <li><a href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Nossa História</a></li>
                    <li><a href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Equipe</a></li>
                  </ul>
                )}
              </li>
              <li><a href="/" className="text-gray-600 hover:text-gray-800">Blog</a></li>
            </ul>
            <ul className="flex items-center space-x-6 ml-auto">
              <li><a href="/" className="text-violet-600 hover:text-gray-800  border border-violet-600 rounded-full px-4 py-2">Anunciar imóvel</a></li>
              <li><a href="/" className="text-gray-600 hover:text-gray-800 mr-4">Entrar</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
}