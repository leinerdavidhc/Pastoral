import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
Aos.init();

export default function Aside(){
    return(
        <aside className="Aside bg-white w-full h-max flex md:flex-row flex-col md:gap-0 gap-2.5 p-7 justify-around items-center">
            <a href="https://www.caritas.es/" target="_blank" data-aos="fade-down" data-aos-delay="50"><div className="aliados"><img src="/src/images/aliados/c-espaola.jpg" alt="Imagen Caritas Española" /></div></a>

            <a href="https://www.diocesisriohacha.org/" target="_blank" data-aos="fade-down" data-aos-delay="100"><div className="aliados"><img src="/src/images/aliados/diocesis.jpg" alt="Imagen Aliado"/></div></a>

            <a href="https://www.acnur.org/" target="_blank" data-aos="fade-down" data-aos-delay="150"><div className="aliados"><img src="/src/images/aliados/iconos-1.png" alt="Imagen ACNUR" /></div></a>

            <a href="https://es.wfp.org/" target="_blank" data-aos="fade-down" data-aos-delay="200"><div className="aliados"><img src="/src/images/aliados/iconos-4.png" alt="Imagen WFP ONU" /></div></a>

            <a href="https://www.aecid.org.co/" target="_blank" data-aos="fade-down" data-aos-delay="250"><div className="aliados"><img src="/src/images/aliados/prop_aecid_empleo.jpg" alt="Imagen Aecid" /></div></a>

            <a href="https://www.usaid.gov/es/colombia" target="_blank" data-aos="fade-down" data-aos-delay="300"><div className="aliados"><img src="/src/images/aliados/usaid.jpg" alt="Imagen USAID" /></div></a>

            <a href="https://www.europana.info/" target="_blank" data-aos="fade-down" data-aos-delay="350"><div className="aliados"><img src="/src/images/aliados/europana.png" alt="Imagen EUROPANA" /></div></a>
        </aside>
    );
}