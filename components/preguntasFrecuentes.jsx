import React from "react";
import Heading from "./heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { preguntas } from "@/data/preguntas";

export default function PreguntasFrecuentes() {
  return (
    <section className="px-5 py-20 md:py-32">
      <div className="max-w-[75rem] mx-auto">
        <div data-aos="zoom-in">
          <Heading
            titulo="Preguntas Frecuentes"
            descripcion="Resuelve tus dudas y lleva tu negocio al siguiente nivel."
          />
        </div>

        <Accordion type="single" collapsible data-aos="fade-up">
          {preguntas.map((pregunta) => (
            <AccordionItem
              key={pregunta.id}
              value={pregunta.item}
              className="md:mb-1"
            >
              <AccordionTrigger className="text-[0.9375rem] md:text-[1rem]">
                {pregunta.pregunta}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400 md:text-[0.9375rem]">
                {pregunta.respuesta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
