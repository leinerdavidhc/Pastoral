import React from "react";

function Slider() {
  return (
    <div className="Slider flex relative gap-2.5 p-2.5">
      <div className="SliderInfo w-2/4 h-full">1</div>
      <div className="caruselSlider w-2/4 h-full">2</div>
      <div className="toogleSocial fixed z-50 right-0 m-5 flex flex-col gap-2">
        <a href="#">
          <i class="fa-brands fa-square-facebook"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <span>-</span>
        <span>Siguenos</span>
      </div>
    </div>
  );
}

export default Slider;
