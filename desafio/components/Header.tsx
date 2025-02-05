'use client';

import Link from 'next/link';
import { JSX, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <header 
      className="bg-white shadow-md bg-cover bg-center min-h-[500px]" 
      style={{ backgroundImage: "url('/background-image.jpeg')" }}
    >
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <img src="/logo-laranja.svg" alt="logo laranja" width="140" height="34" />
        </Link>
        
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div 
          className={`md:flex md:items-center space-x-6 ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li><Link href="/" className="text-gray-800 hover:text-orange-600">Imobiliárias</Link></li>
            <li><Link href="/" className="text-gray-800 hover:text-orange-600">Quero me associar</Link></li>
            
            {/* Dropdown "Sobre" */}
            <li className="relative">
              <button
                className="text-gray-800 hover:text-orange-600 flex items-center space-x-2"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen ? "true" : "false"}
              >
                <span>Sobre</span>
                <ChevronDown size={16} />
              </button>
              {isDropdownOpen && (
                <ul className="absolute bg-white shadow-md mt-2 right-0 w-48 rounded-lg p-2">
                  <li><Link href="/" target="_blank" className="block text-gray-800 hover:text-orange-600">Nossa História</Link></li>
                  <li><Link href="/" target="_blank" className="block text-gray-800 hover:text-orange-600">Equipe</Link></li>
                  <li><Link href="/" target="_blank" className="block text-gray-800 hover:text-orange-600">Visão e Missão</Link></li>
                </ul>
              )}
            </li>
            
            <li><Link href="/" target="_blank" className="text-gray-800 hover:text-orange-600">Blog</Link></li>
          </ul>
        </div>
        
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="text-gray-800 hover:text-orange-600">Anunciar</Link></li>
          <li><Link href="/" className="text-gray-800 hover:text-orange-600">Entrar</Link></li>
        </ul>
      </nav>

      <div className="container mx-auto text-center text-gray-800 p-6">
        <h1 className="text-2xl font-bold">Vende. Aluga. Conecta.</h1>
      </div>
    </header>
  );
}
