//Componente para navegar entre las vistas
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";// Importacion de los modulos de BrowserRouter,Route,Routes 
import Inicio from './views/Inicio';//Importacion de la vista Inicio
import Nosotros from './views/Nosotros';//Importacion de la vista Nosotros
import Historia from './views/Historia';//Importacion de la vista Historia
import Noticias from './views/Noticias';//Importacion de la vista Noticias
import Convocatoria from './views/Convocatoria';//Importacion de la vista Convocatoria

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Inicio/>}/>
        <Route path="/Nosotros" element={<Nosotros/>}/>
        <Route path="/Historia" element={<Historia/>}/>
        <Route path="/Noticias" element={<Noticias/>}/>
        <Route path="/Convocatorias" element={<Convocatoria/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
