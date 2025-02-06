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
            imagen="https://res.cloudinary.com/dgzphcnpw/image/upload/f_auto,q_auto/v1735347641/nitronix_kkqy1r.png"
            pagina="https://nitronix.vercel.app/"
            titulo="Proyecto Nitronix"
            descripcion="Nitronix es una página que ofrece servicios de mantenimiento y cuidado automotriz, para mantener tu vehículo al máximo"
          />
          <CardProyectos
            imagen="https://res.cloudinary.com/dgzphcnpw/image/upload/f_auto,q_auto/v1735347653/portfolio-personal_ybrimz.png"
            pagina="https://miportfolio-eme.netlify.app/"
            className="border dark:border-none"
            titulo="Proyecto Portafolio Personal"
            descripcion="Portafolio web personalizado para un cliente, destacando sus proyectos y habilidades con un diseño limpio y profesional."
          />
        </div>
      </div>
    </section>
  );
}
