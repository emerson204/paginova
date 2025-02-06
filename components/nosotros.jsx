"use client";
import React from "react";
import Heading from "./heading";
import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { motion } from "motion/react";

export default function Nosotros() {
  const mensaje =
    "¡Hola! 👋 Estoy interesado en crear una página web para mi negocio. 🚀 Me gustaría recibir más información sobre sus servicios. ¡Espero su respuesta! 😊";
  return (
    <section className="px-5 pt-20 md:pt-32" id="nosotros">
      <div className="max-w-[75rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(50px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{
            duration: 1.5,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Heading
            titulo="Sobre Nosotros"
            descripcion="Creamos experiencias digitales que conectan negocios y personas."
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5 md:gap-10" data-aos="fade-up">
          <div className="md:grid md:grid-cols-2 md:gap-5 lg:block">
            <Image
              src="https://res.cloudinary.com/dgzphcnpw/image/upload/f_auto,q_auto/v1735347853/hero-seis_exhb1h.jpg"
              alt="nosotros"
              width="550"
              height="550"
              className="rounded-lg w-full  object-cover"
            />
            <Image
              src="https://res.cloudinary.com/dgzphcnpw/image/upload/f_auto,q_auto/v1735347934/nosotros-he_i7aqij.jpg"
              alt="nosotros"
              width="550"
              height="550"
              className="rounded-lg hidden md:block lg:hidden w-full  object-cover"
            />
          </div>
          <div className="lg:max-w-[75%]">
            <h3 className="text-xl md:text-2xl poppins-medium">
              Tu negocio necesita una web que lo represente
            </h3>
            <Separator className="my-3 md:my-5" />
            <p className="text-sm md:text-base text-justify mb-6 md:mb-7 lg:mb-10">
              Con años de experiencia en este rubro, creemos que cada negocio
              merece una página web única y optimizada. Por eso nos dedicamos a
              crear sitios web profesionales que no solo representen tu marca,
              sino que también impulsen tu crecimiento en el mundo digital.
            </p>

            <div className="flex gap-3 md:gap-4 items-center">
              <Link
                href={`https://wa.me/51930253424?text=${encodeURIComponent(
                  mensaje
                )}`}
                className=" bg-[#171717] dark:bg-white w-fit text-white dark:text-black pb-[0.5625rem] pt-[0.6650rem] px-5 rounded-full  cursor-pointer  text-sm  flex items-center gap-2 "
              >
                <Image
                  src="https://res.cloudinary.com/dgzphcnpw/image/upload/f_auto,q_auto/v1735347212/wssp_xsvpiz.png"
                  alt="wssp"
                  width="24"
                  height="24"
                  className="mb-1"
                />
                Contáctanos
              </Link>
              <Link
                href="https://www.instagram.com/paginova.pe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="bg-[#171717] dark:bg-white w-fit text-white dark:text-black  text-sm md:text-base py-[0.680rem] md:py-[0.6rem] px-5 rounded-full  cursor-pointer  flex items-center gap-2 "
              >
                <Image
                  src="https://res.cloudinary.com/dgzphcnpw/image/upload/f_auto,q_auto/v1735347876/icon-instagram_v6nkz1.png"
                  alt="instagram"
                  width="24"
                  height="24"
                />
                Síguenos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
