import React from "react";
import CaruselAliados from "../CaruselAliados";

export default function Aside() {
  return (
    <>
      <aside className="aside-Nosotros flex flex-col items-center p-8  gap-8">
        <h2 className="text-2xl font-bold">Nuestras Oficinas</h2>
        <div className="img-personal overflow-hidden rounded-2xl" data-aos="zoom-in">
          <img
            src="/src/images/Nosotros/Personal.jpg"
            alt="Nuestras Oficinas"
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
        <p className="md:w-4/5 w-full font-semibold" data-aos="zoom-in">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          consectetur tenetur incidunt, odit nemo maxime quae dignissimos
          officiis perspiciatis repellat eaque laboriosam molestiae voluptate
          distinctio recusandae illum fugiat error harum iste doloribus vero
          voluptatem? Cumque quisquam corrupti corporis doloribus odio? Tempora
          molestias, similique perferendis corrupti consequuntur quidem? Iste,
          assumenda. Ipsam perspiciatis laborum in a facere tenetur sed nam
          temporibus dolor.
        </p>
      </aside>
      <div className="Aside w-full h-max flex justify-center items-center bg-white">
        <CaruselAliados />
      </div>
    </>
  );
}
