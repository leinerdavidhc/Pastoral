import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CaruselAliados() {
  const [slidesToShow,setslidesToShow]=useState(3);
  const [tamañoPagina, setTamañoPagina] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setTamañoPagina(window.innerWidth);
    }

    if(tamañoPagina<768){
      setslidesToShow(1)
    }else if(tamañoPagina>=768 && tamañoPagina<1024){
      setslidesToShow(2)
    }else if(tamañoPagina>=1024){
      setslidesToShow(3)
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [tamañoPagina]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="Slider-Aliados h-max p-2.5 overflow-hidden">
      <a
        href="https://www.caritas.es/"
        target="_blank"
        data-aos="fade-down"
        data-aos-delay="50"
      >
        <div className="aliados">
          <img
            src="/src/images/aliados/c-espaola.jpg"
            alt="Imagen Caritas Española"
          />
        </div>
      </a>

      <a
        href="https://www.diocesisriohacha.org/"
        target="_blank"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <div className="aliados">
          <img src="/src/images/aliados/diocesis.jpg" alt="Imagen Aliado" />
        </div>
      </a>

      <a
        href="https://www.acnur.org/"
        target="_blank"
        data-aos="fade-down"
        data-aos-delay="150"
      >
        <div className="aliados">
          <img src="/src/images/aliados/iconos-1.png" alt="Imagen ACNUR" />
        </div>
      </a>

      <a
        href="https://es.wfp.org/"
        target="_blank"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <div className="aliados">
          <img src="/src/images/aliados/iconos-4.png" alt="Imagen WFP ONU" />
        </div>
      </a>

      <a
        href="https://www.aecid.org.co/"
        target="_blank"
        data-aos="fade-down"
        data-aos-delay="250"
      >
        <div className="aliados">
          <img
            src="/src/images/aliados/prop_aecid_empleo.jpg"
            alt="Imagen Aecid"
          />
        </div>
      </a>

      <a
        href="https://www.usaid.gov/es/colombia"
        target="_blank"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        <div className="aliados">
          <img src="/src/images/aliados/usaid.jpg" alt="Imagen USAID" />
        </div>
      </a>

      <a
        href="https://www.europana.info/"
        target="_blank"
        data-aos="fade-down"
        data-aos-delay="350"
      >
        <div className="aliados">
          <img src="/src/images/aliados/europana.png" alt="Imagen EUROPANA" />
        </div>
      </a>
    </Slider>
  );
}
