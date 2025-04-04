import React from "react";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function CardProyectos({
  imagen,
  pagina,
  className = "",
  titulo,
  descripcion,
}) {
  return (
    <div data-aos="fade-up">
      <Image
        src={imagen}
        alt="proyecto"
        width="380"
        height="380"
        className={`rounded-lg mx-auto w-full ${className} `}
        loading="lazy"
      />
      <div className="mt-3">
        <h2 className="text-lg lg:text-xl poppins-medium mb-2  ">{titulo}</h2>
        <p className="text-sm mb-4 poppins-light">{descripcion}</p>
        <Link
          href={pagina}
          className={`${buttonVariants({
            variant: "default",
          })} py-5`}
          target="_blank"
        >
          <ExternalLink />
          Visitar la página
        </Link>
      </div>
    </div>
  );
}
