import React from "react";
function ItemProyectos({Proyect}){
    return(
        <div className="itemProyecto relative">
            <img src={Proyect.image} alt="imagen Proyecto" className="w-full h-full object-cover"/>
        <div className="itemProyecto-Info absolute bottom-0 left-0 p-2.5">
            <h2 className="text-xl text-white font-medium">{Proyect.TituloProyecto}</h2>
            <a href="#" className="text-base text-gray-400 font-normal text-center">Ver Proyecto <i className="fa-solid fa-chevron-right"></i></a>
        </div>
    </div>
    );
}

export default ItemProyectos;