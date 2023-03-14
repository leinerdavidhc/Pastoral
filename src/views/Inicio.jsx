//Vista Inicio de la pagina , sera la primera en mostrarse
import React from "react";
import Header from "../components/Header";
import Slider from "../components/Inicio/Slider";
import EnacabezadoMain from "../components/Inicio/EncabezdoMain";
import Main from "../components/Inicio/Main";
import ToogleSocial from "../components/Tooglesocial";
import Footer from '../components/Footer'
import '../styles/Inicio.css'
import Aside from "../components/Inicio/Aside";

function Inicio() {
  return (
    <div className="contenedor">
      <Header />
      <Slider/>
      <EnacabezadoMain/>
      <Main/>
      <Aside/>
      <ToogleSocial/>
      <Footer/>
    </div>
  );
}

export default Inicio;
