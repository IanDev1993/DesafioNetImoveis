"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Flat {
  Id: number;
  City: string;
  Title: string;
  Author: string;
  Rooms: number;
  Tags: string[];
  Price: number;
  Image: string;
}

const FlatSection = () => {
  const [flats, setFlats] = useState<Flat[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/Flats")
      .then((res) => res.json())
      .then((data) => {
        console.log("Dados recebidos:", data);
        setFlats(data);
      })
      .catch((error) => console.error("Erro ao buscar os flats:", error));
  }, []);

  return (
    <section className="bg-gray-300 w-full py-10">
      <div className="container mx-auto px-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-black">
            Novos Anúncios em <span className="text-orange-600">Belo Horizonte</span>
          </h2>
          <a href="/" className="text-blue-500 hover:underline block mt-2">
            Ver todos os imóveis →
          </a>
        </div>     
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}

          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true, }}
        >
          {flats.map((flat) => (
            <SwiperSlide key={flat.Id}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <img
                  src={flat.Image}
                  alt={flat.Title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg text-black font-semibold">{flat.Title}</h3>
                  <p className="text-sm text-gray-500">{flat.Author}</p>
                  <p className="text-sm text-gray-500">
                    {flat.Rooms} Quartos • {(flat.Tags ?? []).join(" • ")}
                  </p>
                  <p className="text-lg font-bold text-orange-600">
                    R$ {(flat.Price ?? 0).toLocaleString("pt-BR")}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FlatSection;
