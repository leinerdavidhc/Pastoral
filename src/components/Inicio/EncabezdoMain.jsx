import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();
export default function EnacabezadoMain() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulamos una carga de 3 segundos
  }, []);
  return (
    <div
      className="EnacabezadoMain w-full grid md:grid-cols-2 grid-cols-1 bg-white gap-2.5 p-14"
      data-aos="fade-right"
    >
      {isLoading ? (
        <>
            <div className="skeleton info-skeloton h-96 w-full">
                <div className="skeleton-h1 skeleton "></div>
                <div className="p-skeleton skeleton"></div>
            </div>
            <div className="img-skeleton h-96 w-full skeleton"></div>
        </>
      ) : (
        <>
          <div className="infoEncabezado flex flex-col gap-10 font-semibold">
            <h1 className="text-3xl font-bold w-3/4 italic">
              SECRETARIADO DE PASTORAL SOCIAL DIÓCESIS DE RIOHACHA
            </h1>
            <p className="text-lg w-11/12 italic leading-9">
              Somos un organismo eclesial, sin ánimo de lucro, dependiente de la
              Diócesis de Riohacha, que busca la verdad, la paz, la
              reconciliación, la justicia y la caridad en las relaciones y en
              las estructuras básicas de nuestra sociedad Guajira; trabaja por
              la liberación integral del hombre del pecado personal y social, en
              función de construir la tan ansiada Civilización del Amor
            </p>
          </div>
          <div className="ContenedorImg">
            <img
              src="/src/images/Secretariado-Pastoral.jpeg"
              alt="Secretariado-Pastoral"
              className="w-full h-full object-contain"
            />
          </div>
        </>
      )}
    </div>
  );
}
