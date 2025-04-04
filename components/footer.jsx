import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const mensaje = "¡Hola! Quiero saber más sobre tus servicios.";

  return (
    <footer className="bg-[#0a0a0a] dark:border-t dark:border-x-gray-700 text-white px-5 pt-12 ">
      <div className="max-w-[75rem] mx-auto flex flex-col gap-12 md:gap-0 md:flex-row justify-between mb-20 md:mb-28">
        <div>
          <Image
            src="https://res.cloudinary.com/dgzphcnpw/image/upload/v1738806111/paginova-web_r7vy9z.png"
            alt="logo"
            width="65"
            height="65"
            className="w-[4rem] md:w-[4.5rem] "
          />
          <h2 className="text-[0.9375rem] md:text-base mt-3 md:mt-5">
            Creando páginas web que hacen <br /> crecer tu negocio.
          </h2>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl poppins-medium mb-6 md:mb-8">
            Contacto
          </h3>
          <Link
            href={`https://wa.me/51907993141?text=${encodeURIComponent(
              mensaje
            )}`}
            className="flex items-center gap-4 mb-5 md:mb-7 text-[0.9375rem] md:text-base"
          >
            <Phone />
            <p>+51 907 993 141</p>
          </Link>
          <Link
            href="mailto:paginovape@gmail.com"
            className="flex items-center gap-4 text-[0.9375rem] md:text-base "
          >
            <Mail />
            <p>paginovape@gmail.com</p>
          </Link>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl poppins-medium mb-6 md:mb-8">
            Redes
          </h3>
          <div className="flex gap-2 items-center">
            <Link href="https://www.instagram.com/paginova.pe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <Instagram />
            </Link>
            <Link href="#">
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-sm pb-7">
        Paginova © 2025 Todos los derechos reservados
      </p>
    </footer>
  );
}
