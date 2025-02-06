"use client";
import React from "react";
import Heading from "./heading";
import CardServicio from "./cardServicios";

export default function Servicios() {
  return (
    <section className="px-5 pt-16 lg:pt-32" id="servicios">
      <div className="max-w-[75rem] mx-auto">
        <div data-aos="zoom-in">
          <Heading
            titulo="Nuestros Servicios"
            descripcion="Creamos y cuidamos tu presencia online con servicios de calidad
            profesional."
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9 md:gap-10">
          <CardServicio
            imagen="https://res.cloudinary.com/dgzphcnpw/image/upload/f_auto,q_auto/v1735347536/website_ti59jw.png"
            subtitulo="Páginas Web Personalizadas"
            descripcion=" Creamos sitios web a medida para tu negocio, con diseño único y
                funcional."
          />
          <CardServicio
            imagen="https://res.cloudinary.com/dgzphcnpw/image/upload/f_auto,q_auto/v1735347530/store_yydbxe.png"
            subtitulo="Tiendas Online"
            descripcion="Desarrollamos tiendas online seguras y optimizadas para impulsar
                tus ventas."
          />
          <CardServicio
            imagen="https://res.cloudinary.com/dgzphcnpw/image/upload/f_auto,q_auto/v1735347520/seo-cloud_b6jyw5.png"
            subtitulo="SEO y Mantenimiento Web"
            descripcion="Mejoramos el SEO de tu sitio web y aseguramos su rendimiento continuo, manteniéndolo actualizado y libre de problemas."
          />
        </div>
      </div>
    </section>
  );
}
