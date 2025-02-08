"use client"
import { useState } from "react";

export default function InfoSection() {
  const [tab, setTab] = useState(0);

  return (
    <div className="bg-gray-50 text-gray-500 w-full mx-auto p-8">
      <div className="flex border-b">
        <button onClick={() => setTab(0)} className={`px-4 py-2 ${tab === 0 ? 'border-b-2 border-orange-500' : ''}`}>
          Tipos de Propriedades
        </button>
        <button onClick={() => setTab(1)} className={`px-4 py-2 ${tab === 1 ? 'border-b-2 border-orange-500' : ''}`}>
          Populares para Venda
        </button>
        <button onClick={() => setTab(2)} className={`px-4 py-2 ${tab === 2 ? 'border-b-2 border-orange-500' : ''}`}>
          Populares para Locação
        </button>
      </div>

      <div className="pt-4">
        {tab === 0 && (
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold">Alugar</h3>
              <ul>
                <li>Apartamentos</li>
                <li>Casas</li>
                <li>Terrenos</li>
                <li>Lojas</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Comprar</h3>
              <ul>
                <li>Casas à venda</li>
                <li>Imóveis em Condomínios</li>
                <li>Comprar terrenos</li>
                <li>Lançamentos</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Comercial</h3>
              <ul>
                <li>Imóveis com escritório</li>
                <li>Prédio comercial</li>
                <li>Galpão de Armazenamento</li>
                <li>Salão de Eventos</li>
              </ul>
            </div>
          </div>
        )}
        {tab === 1 && <p>Conteúdo para Populares para Venda</p>}
        {tab === 2 && <p>Conteúdo para Populares para Locação</p>}
      </div>
    </div>
  );
}
