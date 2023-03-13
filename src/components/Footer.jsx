import React from "react";

function Footer() {
  return (
    <footer className="Footer w-full h-max p-2.5 flex md:flex-row flex-col md:items-center relative md:gap-0 gap-4">
      <div className="footer-Contactos flex flex-col gap-2 text-sm">
        <span>
          <i className="fa-solid fa-location-dot"></i> Calle 16B #11A-68
        </span>
        <span>
          <i className="fa-solid fa-clock"></i> Lunes-Viernes 8:00 A.M-6:00 P.M
        </span>
        <span>
          <i className="fa-solid fa-phone-volume"></i> 6057292809
        </span>
        <span>
          <i className="fa-solid fa-envelope"></i> contacto@sepasriohacha.org
        </span>
      </div>
      <div className="footerInfo md:absolute md:top-2/4 md:left-2/4 flex flex-col justify-center items-center md:-translate-x-2/4 md:-translate-y-2/4 h-full gap-4">
        <div className="footerInfo-Info">
          <h3 className="text-xl text-center">Nuestra misión se fundamenta en el principio de:</h3>
          <div className="frases h-9 overflow-hidden flex flex-col items-center justify-center">
            <div className="item">#La Caridad</div>
            <div className="item">#La Dignidad Humana</div>
            <div className="item">#El Bien Común</div>
            <div className="item">#La Solidaridad</div>
          </div>
        </div>
        <div className="copyright text-center text-xs">
          <i className="fa-regular fa-copyright"></i>2023 SECRETARIADO DE PASTORAL
          SOCIAL RIOHACHA, Todo Los Derechos Reservados
        </div>
      </div>
    </footer>
  );
}

export default Footer;
