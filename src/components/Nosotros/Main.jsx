import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
Aos.init()

export default function Main() {
  return (
    <main className="Main-Nosotros mt-16 md:mt-24 pb-10">
      <div className="sepas-Pastoral flex gap-10 p-10 flex-col md:flex-row">
        <img src="/src/images/Nosotros/Sepas.jpg" alt="Imagen Nostros-SEPAS"  className="md:w-2/5 w-full" data-aos="fade-right"/>
        <div className="infoSepas flex flex-col gap-5 justify-center items-center" data-aos="fade-left">
          <h1 className="text-2xl font-bold text-center">Sepas</h1>
          <p className="text-base font-normal w-11/12">
            Los miembros del <strong>Secretariado de Pastoral Social Riohacha</strong>, que
            llevamos a cabo el ministerio de la caridad en la Jurisdicción de la
            Diócesis de Riohacha, tenemos la responsabilidad de dar ejemplo del
            Evangelio con nuestras enseñanzas, valores y deberes en nuestras
            vidas y en nuestras acciones. Debemos tener conciencia de la
            responsabilidad que acompaña nuestro trabajo sabiendo que la bondad
            y la gracia de Dios nos apoyan en nuestra labor.
          </p>
          <p className="text-base font-normal w-11/12"> La esencia e
            inspiración del Secretariado de Pastoral Social Riohacha derivan del
            testimonio de la Sagrada Escritura, así como de la Tradición, el
            Magisterio y la Doctrina Social de la Iglesia Católica. El
            Secretariado de Pastoral Social Riohacha se esfuerza en todo momento
            por defender la dignidad de la persona humana</p>
        </div>
      </div>
      <div className="AcercaDE grid md:grid-cols-4 grid-cols-1 gap-6 p-5 justify-items-center m-9 my-0">
        <section data-aos="fade-down" data-aos-delay="50">
            <h3>Misión</h3>
            <p>Animar la práctica del mandamiento del amor y coordinar la evangelización de lo social en la iglesia Diocesana de Riohacha, sirviendo y dignificando a la persona humana en la búsqueda de su desarrollo personal integral.</p>
            <i className="fa-sharp fa-solid fa-map"></i>
        </section>
        <section data-aos="fade-down" data-aos-delay="100">
            <h3>Visión</h3>
            <p>Transformar la realidad social, mediante el servicio a la persona humana, para que pueda vivir con dignidad y construir procesos de equidad, reconciliación y paz, a la luz del Evangelio y la Doctrina Social de la Iglesia.</p>
            <i className="fa-solid fa-binoculars"></i>
        </section>
        <section data-aos="fade-down" data-aos-delay="150">
            <h3>Valores</h3>
            <p>Transformar la realidad social, mediante el servicio a la persona humana, para que pueda vivir con dignidad y construir procesos de equidad, reconciliación y paz, a la luz del Evangelio y la Doctrina Social de la Iglesia.</p>
            <ul>
                <li>Opción preferencial por los pobres</li>
                <li>Cuidado del medio ambiente</li>
                <li>Servicio</li>
                <li>Respeto</li>
                <li>Espíritu de comunión</li>
                <li>Espíritu de Equipo</li>
            </ul>
        </section>
        <section data-aos="fade-down" data-aos-delay="200">
            <h3>Principios</h3>
            <p>Los valores sobre los cuales se asienta nuestra misión son:</p>
            <ul>
            <li>Dignidad Humana</li>
            <li>Caridad</li>
            <li>Bien Común</li>
            <li>Solidaridad</li>
            <li>Subsudiaridad</li>
            <li>Destino universal de los bienes</li>
            </ul>
        </section>
      </div>
    </main>
  );
}
