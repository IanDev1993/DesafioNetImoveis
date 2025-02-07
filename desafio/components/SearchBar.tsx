'use client';

import { useState } from 'react';
import { Search, MapPin, Bed } from 'lucide-react';

export default function SearchBar() {
  const [location, setLocation] = useState('');
  const [rooms, setRooms] = useState('');

  return (
    <div className="flex items-center bg-white rounded-full shadow-md p-2 w-full max-w-2xl">
      <div className="flex items-center flex-1 px-4">
        <MapPin className="text-gray-500" size={20} />
        <div className="ml-2">
          <p className="text-xs font-bold text-gray-700">Localização</p>
          <input
            type="text"
            placeholder="Qual é a Localização?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="outline-none text-sm bg-transparent w-full placeholder-gray-400 text-black"
          />
        </div>
      </div>
      <div className="border-l border-gray-300 h-6"></div>
      <div className="flex items-center flex-1 px-4">
        <Bed className="text-gray-500" size={20} />
        <div className="ml-2">
          <p className="text-xs font-bold text-gray-700">Nº de Quartos</p>
          <input
            type="text"
            placeholder="Quantos Quartos?"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            className="outline-none text-sm bg-transparent w-full placeholder-gray-400 text-black"
          />
        </div>
      </div>
      <button className="bg-orange-500 text-white rounded-full p-3 hover:bg-orange-600 transition">
        <Search size={20} />
      </button>
    </div>
  );
}
