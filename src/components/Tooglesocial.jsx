import React from "react";

function ToogleSocial(){
    return(
        <div className="toogleSocial fixed z-50 md:top-64 top-40 right-0 m-5 flex flex-col gap-2">
        <a href="#">
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <span>-</span>
        <span>Siguenos</span>
      </div>
    );
}

export default ToogleSocial;