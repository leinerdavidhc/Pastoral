//Vista Inicio de la pagina , sera la primera en mostrarse
import React from "react";
import Header from "../components/Header";
import Slider from "../components/Inicio/Slider";
import Main from "../components/Inicio/Main";
import ToogleSocial from "../components/Tooglesocial";
import '../styles/Inicio.css'

function Inicio() {
  return (
    <div className="contenedor">
      <Header />
      <Slider/>
      <Main/>
      <ToogleSocial/>
    </div>
  );
}

export default Inicio;
