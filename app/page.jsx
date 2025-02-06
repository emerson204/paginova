"use client";

import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Nosotros from "@/components/nosotros";
import PreguntasFrecuentes from "@/components/preguntasFrecuentes";
import Proyectos from "@/components/proyectos";
import Servicios from "@/components/servicios";
import Aos from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Nosotros />
      <Servicios />
      <Proyectos />
      <Banner />
      <PreguntasFrecuentes />
      <Footer />
    </>
  );
}
