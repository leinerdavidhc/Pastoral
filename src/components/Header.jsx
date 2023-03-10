import React, { useState } from "react";
import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [btnBuerger,setbtnBurger]=useState("burger");
  const [clicBurger,setClicBurger]=useState(false);
  const [NavPublic,setNavPublic]=useState("NavPublic flex justify-around md:p-2.5 px-2.5 md:px-8 p-8 md:items-center gap-2.5 flex-col md:flex-row relative md:-translate-x-0 -translate-x-full");
  const ActiveLinkClick = (routeName) => {
    setActiveLink(routeName);
  };
  return (
    <header className="HeaderPublic">
      <div className="navMobile flex justify-between items-center md:hidden">
        <button className={btnBuerger} onClick={()=>{
          setClicBurger(!clicBurger)
          if(clicBurger){
            setbtnBurger("burger burgerbtn")
            setNavPublic("NavPublic flex justify-around md:p-2.5 px-2.5 md:px-8 p-8 md:items-center gap-2.5 flex-col md:flex-row relative md:-translate-x-0 -translate-x-0")
          }else{
            setbtnBurger("burger")
            setNavPublic("NavPublic flex justify-around md:p-2.5 px-2.5 md:px-8 p-8 md:items-center gap-2.5 flex-col md:flex-row relative md:-translate-x-0 -translate-x-full")
          }
        }}>
          <div className="animacionBurger"></div>
          <div className="animacionBurger"></div>
          <div className="animacionBurger"></div>
        </button>
      <img src="src/assets/LOGO-PASTORAL-HORIZONTAL.png" alt="Logo-Pastoral-horizontal"  className="h-11"/>
      </div>
      <nav className={NavPublic}>

        <ul className="order-2 md:order-1 NavUl flex w-2/4 h-max justify-around flex-col md:flex-row">
          <li
            className={classnames("itemEnlaces", {
              active: activeLink === "/",
              disable: activeLink !== "/",
            })}
            onClick={() => ActiveLinkClick("/")}
          >
            <Link to="/">Inicio</Link>
          </li>

          <li
            className={classnames("itemEnlaces", {
              active: activeLink === "/Nosotros",
              disable: activeLink !== "/Nosotros",
            })}
            onClick={() => ActiveLinkClick("/Nosotros")}
          >
            <Link to="/Nosotros">Nosotros</Link>
          </li>

          <li
            className={classnames("itemEnlaces", {
              active: activeLink === "/Historia",
              disable: activeLink !== "/Historia",
            })}
            onClick={() => ActiveLinkClick("/Historia")}
          >
            <Link to="/Historia">Historia</Link>
          </li>

          <li
            className={classnames("itemEnlaces", {
              active: activeLink === "/Noticias",
              disable: activeLink !== "/Noticias",
            })}
            onClick={() => ActiveLinkClick("/Noticias")}
          >
            <Link to="/Noticias">Noticias</Link>
          </li>

          <li
            className={classnames("itemEnlaces", {
              active: activeLink === "/Convocatorias",
              disable: activeLink !== "/Convocatorias",
            })}
            onClick={() => ActiveLinkClick("/Convocatorias")}
          >
            <Link to="/Convocatorias">Convocatoria</Link>
          </li>
        </ul>
        <img src="src/assets/LOGO-PASTORAL-HORIZONTAL.png" alt="Logo-Pastoral-horizontal"  className="md:h-32 h-24 order-1 md:order-2 self-center"/>
      </nav>
    </header>
  );
}

export default Header;
