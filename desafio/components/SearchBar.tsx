'use client';

import { useEffect, useState } from 'react';
import { Search, MapPin, Bed } from 'lucide-react';

export default function SearchBar() {
  const [location, setLocation] = useState('');
  const [rooms, setRooms] = useState('');
  const [places, setPlaces] = useState<Place[]>([]);
  const [filteredPlaces, setFilteredPlaces] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/Places")
      .then((res) => res.json())
      .then((data) => {
        console.log("Places recebidos:", data);
        setPlaces(data);
      })
      .catch((error) => console.error("Erro ao buscar os places:", error));
  }, []);

  useEffect(() => {
    if (location.trim() === '') {
      setFilteredPlaces([]);
      return;
    }

    const filtered = places
      .filter((place) =>
        place.Name.toLowerCase().includes(location.toLowerCase())
      )
      .map((place) => `${place.Name} - ${place.State.ShortName}`);

    setFilteredPlaces(filtered);
  }, [location, places]);

  return (
    <div className="flex items-center bg-white rounded-full shadow-md p-2 w-full max-w-2xl">
      <div className="flex items-center flex-1 px-4">
        <MapPin className="text-gray-500" size={20} />
        <div className="ml-2 relative">
          <p className="text-xs font-bold text-gray-700">Localização</p>
          <input
            type="text"
            placeholder="Qual é a Localização?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="outline-none text-sm bg-transparent w-full placeholder-gray-400 text-black"
          />
          {filteredPlaces.length > 0 && (
            <ul className="absolute mt-2 w-full bg-white border border-gray-300 shadow-lg max-h-40 overflow-auto z-10">
              {filteredPlaces.map((place, index) => (
                <li
                  key={index}
                  className="p-3 w-full text-black hover:bg-gray-100 cursor-pointer text-sm"
                  onClick={() => setLocation(place)}
                >              
                  {place}               
                </li>
              ))}
            </ul>
          )}
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
