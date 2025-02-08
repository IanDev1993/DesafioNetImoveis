import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-500 p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-indigo-900  mb-4">A NetImóveis</h3>
            <ul>
              <li><a href="/" className="hover:text-gray-400">Quem somos</a></li>
              <li><a href="/" className="hover:text-gray-400">Como funciona</a></li>
              <li><a href="/" className="hover:text-gray-400">Seja um parceiro</a></li>
              <li><a href="/" className="hover:text-gray-400">Quero me associar</a></li>
              <li><a href="/" className="hover:text-gray-400">Acessoria de imprensa</a></li>
              <li><a href="/" className="hover:text-gray-400">Saluções Corporativas</a></li>
              <li><a href="/" className="hover:text-gray-400">Covid-19</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-indigo-900  mb-4">Recursos</h3>
            <ul>
              <li><a href="/" className="hover:text-gray-400">Comprar</a></li>
              <li><a href="/" className="hover:text-gray-400">Alugar</a></li>
              <li><a href="/" className="hover:text-gray-400">Lançamentos</a></li>
              <li><a href="/" className="hover:text-gray-400">Anunciar imóvel</a></li>
              <li><a href="/" className="hover:text-gray-400">Simular Financiamento</a></li>
              <li><a href="/" className="hover:text-gray-400">Imobiliárias</a></li>
              <li><a href="/" className="hover:text-gray-400">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-indigo-900  mb-4">Contato</h3>
            <ul>
              <li><a href="/" className="hover:text-gray-400">Fale Conosco</a></li>
              <li><a href="/" className="hover:text-gray-400">Perguntas Frequentes</a></li>
              <li><a href="/" className="hover:text-gray-400">Suporte</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-indigo-900 mb-4">Nossos Aplicativos</h3>
            <ul>
              <li><a href="/" className="hover:text-gray-400">Loc Fácil NetImóveis</a></li>
              <li><a href="/" className="hover:text-gray-400">Pro Imob NetImóveis</a></li>
            </ul>
          </div>
        </div>
      </div>               
    </footer>        
  );
};

export default Footer;