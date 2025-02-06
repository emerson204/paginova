"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  const mensaje =
    "¡Hola! 👋 Estoy interesado en crear una página web para mi negocio. 🚀 Me gustaría recibir más información sobre sus servicios. ¡Espero su respuesta! 😊";

  return (
    <section
      className="bg-[url('https://res.cloudinary.com/dgzphcnpw/image/upload/f_auto,q_auto/v1735347087/hero-mobile_awx5zi.jpg')] md:bg-[url('https://res.cloudinary.com/dgzphcnpw/image/upload/f_auto,q_auto/v1735347055/hero-desktop_ximalt.jpg')]  bg-center bg-no-repeat bg-cover h-[26rem] md:h-[33rem] lg:h-[37rem] relative after:content-[''] after:absolute after:bg-black/55 after:inset-0 "
      id="inicio"
    >
      <div className="max-w-[75rem] mx-auto px-5 text-white relative z-10 flex flex-col  justify-center h-full">
        <motion.h1
          className="text-[32px] leading-[2.25rem] md:text-5xl lg:text-6xl md:max-w-[78%] lg:max-w-[63%] poppins-semibold mb-3 md:mb-7"
          initial={{ opacity: 0, transform: "translateY(50px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{
            duration: 1.5,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Impulsa tu negocio con una página web profesional
        </motion.h1>

        <motion.p
          className="lg:max-w-[60%] md:max-w-[70%] text-sm md:text-base lg:text-lg leading-5 mb-8 md:mb-10"
          initial={{ opacity: 0, transform: "translateY(50px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{
            duration: 1.6,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Creamos páginas web impactantes que impulsan tu negocio, mejoran tu
          presencia online y atraen más clientes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, transform: "translateY(50px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{
            duration: 1.7,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Link
            href={`https://wa.me/51907559345?text=${encodeURIComponent(
              mensaje
            )}`}
            className="bg-white w-fit text-black pb-[0.5625rem] pt-[0.6650rem] px-5 rounded-full  cursor-pointer  text-sm  flex items-center gap-2 "
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
        </motion.div>
      </div>
    </section>
  );
}
