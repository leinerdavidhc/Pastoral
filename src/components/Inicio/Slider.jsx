import React from "react";
import Carusel from "./Carusel";
import AOS from 'aos';
import 'aos/dist/aos.css'; // importa los estilos de AOS
AOS.init(); // inicializa AOS


function Slider() {
  const images = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];
  return (
    <div className="Slider flex md:flex-row flex-col gap-2.5 p-4 md:h-80 h-max md:mt-24 mt-16" data-aos="zoom-in-down" data-aos-duration="1300">
      <div className="SliderInfo md:w-2/4 w-full h-full flex flex-col gap-3 p-2 justify-center">
        <p className="text-black font-semibold text-4xl w-4/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nihil?
        </p>
        <a
          href="#"
          className="text-xl flex items-center justify-center w-max gap-2"
        >
          Conoce Más <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
     <div className="Carusel-Slider md:w-2/4 w-full">
      <h3 className="text-xl font-bold text-center">Actualidad</h3>
     <Carusel>
        {images.map((url,index)=>(
          <img src={url} key={index} className="object-contain w-full h-full" />
        ))}
      </Carusel>
     </div>
    </div>
  );
}

export default Slider;
