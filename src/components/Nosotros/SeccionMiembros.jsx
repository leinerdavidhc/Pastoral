import React from "react";

export default function SeccionMiembros(){
    return(
        <section className="flex flex-col gap-4 p-10 w-full items-center mx-auto my-0 bg-white">
            <h2 className="text-4xl font-bold nuestro text-center">Nuestros Miembros</h2>

            <article className="flex md:flex-row flex-col  md:p-10 items-center gap-5" data-aos="fade-right">
                <div className="infoMiembro md:w-3/5 w-full flex gap-3 flex-col items-center p-2">
                    <h3 className="text-3xl font-bold text-center">Señor</h3>
                    <p className="w-full font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi unde velit, quod quisquam optio asperiores fuga illum deserunt laudantium exercitationem? Magnam cumque iusto, dolorum delectus optio accusamus aspernatur numquam. Animi ad quia perspiciatis laudantium, suscipit possimus omnis asperiores delectus debitis placeat perferendis enim architecto vel, officiis, modi id aspernatur quidem! 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aut officiis odio, error iure nisi recusandae consectetur, dolorum excepturi accusantium suscipit ea debitis incidunt voluptatibus numquam obcaecati reprehenderit rem assumenda.
                    </p>
                </div>
                <div className="imgMiembro overflow-hidden md:w-2/5 w-full h-60 rounded-2xl">
                <img src="/src/images/Nosotros/100_7623.jpg" alt="Miembro"  className="h-full w-full object-cover"/>
                </div>
            </article>

            <article className="flex md:flex-row flex-col  md:p-10 items-center gap-5" data-aos="fade-left">
                <div className="infoMiembro md:w-3/5 w-full flex gap-3 flex-col items-center md:order-2 p-2">
                    <h3 className="text-3xl font-bold text-center">Señora</h3>
                    <p className="w-full font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi unde velit, quod quisquam optio asperiores fuga illum deserunt laudantium exercitationem? Magnam cumque iusto, dolorum delectus optio accusamus aspernatur numquam. Animi ad quia perspiciatis laudantium, suscipit possimus omnis asperiores delectus debitis placeat perferendis enim architecto vel, officiis, modi id aspernatur quidem! 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aut officiis odio, error iure nisi recusandae consectetur, dolorum excepturi accusantium suscipit ea debitis incidunt voluptatibus numquam obcaecati reprehenderit rem assumenda.
                    </p>
                </div>
                <div className="imgMiembro overflow-hidden md:w-2/5 w-full h-60 rounded-2xl md:order-1">
                <img src="/src/images/Nosotros/100_7623.jpg" alt="Miembro"  className="h-full w-full object-cover"/>
                </div>
            </article>

            <article className="flex md:flex-row flex-col  md:p-10 items-center gap-5" data-aos="fade-right">
                <div className="infoMiembro  md:w-3/5 w-full flex gap-3 flex-col items-center p-2">
                    <h3 className="text-3xl font-bold text-center">Señor</h3>
                    <p className="w-full font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi unde velit, quod quisquam optio asperiores fuga illum deserunt laudantium exercitationem? Magnam cumque iusto, dolorum delectus optio accusamus aspernatur numquam. Animi ad quia perspiciatis laudantium, suscipit possimus omnis asperiores delectus debitis placeat perferendis enim architecto vel, officiis, modi id aspernatur quidem! 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aut officiis odio, error iure nisi recusandae consectetur, dolorum excepturi accusantium suscipit ea debitis incidunt voluptatibus numquam obcaecati reprehenderit rem assumenda.
                    </p>
                </div>
                <div className="imgMiembro overflow-hidden md:w-2/5 w-full h-60 rounded-2xl">
                <img src="/src/images/Nosotros/100_7623.jpg" alt="Miembro"  className="h-full w-full object-cover"/>
                </div>
            </article>
        </section>
    );
}