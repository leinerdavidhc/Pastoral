import React from "react";
import ItemProyectos from "./ItemProyectos";
function Main() {
  const Data = [
    {
      id: 1,
      TituloProyecto: "Proyecto 1",
      descricion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro tempora velit dolorem harum illo quasi. Aperiam quam officiis nihil laboriosam pariatur quibusdam qui sit, eum harum, dolore reprehenderit in?",
        image:"https://i.ibb.co/ncrXc2V/1.png",
    },
    {
      id: 2,
      TituloProyecto: "Proyecto 2",
      descricion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro tempora velit dolorem harum illo quasi. Aperiam quam officiis nihil laboriosam pariatur quibusdam qui sit, eum harum, dolore reprehenderit in?",
        image:"https://i.ibb.co/B3s7v4h/2.png",
    },
    {
      id: 3,
      TituloProyecto: "Proyecto 3",
      descricion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro tempora velit dolorem harum illo quasi. Aperiam quam officiis nihil laboriosam pariatur quibusdam qui sit, eum harum, dolore reprehenderit in?",
        image:"https://i.ibb.co/XXR8kzF/3.png",
    },
    {
      id: 4,
      TituloProyecto: "Proyecto 4",
      descricion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro tempora velit dolorem harum illo quasi. Aperiam quam officiis nihil laboriosam pariatur quibusdam qui sit, eum harum, dolore reprehenderit in?",
        image:"https://i.ibb.co/yg7BSdM/4.png",
    },
    {
      id: 5,
      TituloProyecto: "Proyecto 5",
      descricion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro tempora velit dolorem harum illo quasi. Aperiam quam officiis nihil laboriosam pariatur quibusdam qui sit, eum harum, dolore reprehenderit in?",
        image:"https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      TituloProyecto: "Proyecto 6",
      descricion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro tempora velit dolorem harum illo quasi. Aperiam quam officiis nihil laboriosam pariatur quibusdam qui sit, eum harum, dolore reprehenderit in?",
        image:"https://i.ibb.co/ncrXc2V/6.png",
    },
    {
      id: 7,
      TituloProyecto: "Proyecto 7",
      descricion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro tempora velit dolorem harum illo quasi. Aperiam quam officiis nihil laboriosam pariatur quibusdam qui sit, eum harum, dolore reprehenderit in?",
    },
    {
      id: 8,
      TituloProyecto: "Proyecto 8",
      descricion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro tempora velit dolorem harum illo quasi. Aperiam quam officiis nihil laboriosam pariatur quibusdam qui sit, eum harum, dolore reprehenderit in?",
    },
    {
      id: 9,
      TituloProyecto: "Proyecto 9",
      descricion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro tempora velit dolorem harum illo quasi. Aperiam quam officiis nihil laboriosam pariatur quibusdam qui sit, eum harum, dolore reprehenderit in?",
    },
  ];
  const Proyectos = Data.slice(0, 5);
  return (
    <main className="Main">
      <div className="MainGrid md:p-12 md:py-7 p-2.5">
        {Proyectos.map((Proyect, i) => (
          <ItemProyectos Proyect={Proyect} key={i}/>
        ))}
      </div>
    </main>
  );
}

export default Main;
