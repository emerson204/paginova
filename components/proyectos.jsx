import React from "react";
import Heading from "./heading";
import CardProyectos from "./cardProyectos";

export default function Proyectos() {
  return (
    <section className="px-5 py-20 md:py-32" id="proyectos">
      <div className="max-w-[75rem] mx-auto">
        <div data-aos="zoom-in">
          <Heading
            titulo="Nuestros Proyectos"
            descripcion="Descubre cómo transformamos ideas en resultados excepcionales."
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <CardProyectos
            imagen="https://res.cloudinary.com/dgzphcnpw/image/upload/v1743807498/nitronix_htvyg4.png"
            pagina="https://nitronix.vercel.app/"
            titulo="Proyecto Nitronix"
            descripcion="Nitronix es una página que ofrece servicios de mantenimiento y cuidado automotriz, para mantener tu vehículo al máximo"
          />

          <CardProyectos
            imagen="https://res.cloudinary.com/dgzphcnpw/image/upload/v1743807498/bhmusic_yzkwis.png"
            pagina="https://bhmusicoficial.com/"
            className=""
            titulo="Proyecto B&H Music"
            descripcion="B&H Music es una página que ofrece servicios de producción y distribución musical, para impulsar el talento de nuevos artistas."
          />
        </div>
      </div>
    </section>
  );
}
