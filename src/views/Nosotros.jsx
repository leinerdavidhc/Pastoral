import React from "react";
import Header from "../components/Header";
import Main from "../components/Nosotros/Main";
import SeccionMiembros from "../components/Nosotros/SeccionMiembros";
import Aside from "../components/Nosotros/Aside";
import Tooglesocial from '../components/Tooglesocial'
import Footer from '../components/Footer'
import '../styles/Nosotros.css'

function Nosotros(){
    return(
        <div className="contenedor-Nosotros">
            <Header/>
            <Main/>
            <SeccionMiembros/>
            <Aside/>
            <Footer/>
            <Tooglesocial/>
        </div>
    );
}

export default Nosotros;