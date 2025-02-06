import React from "react";

export default function Heading({ titulo, descripcion }) {
  return (
    <>
      <h2 className="text-[1.625rem] md:text-3xl lg:text-4xl poppins-semibold mb-1 md:mb-2 text-center">
        {titulo}
      </h2>
      <p className="text-center px-4 text-sm md:text-base md:max-w-[60%] mx-auto text-gray-500 dark:text-[#b0b0b9] md:mb-12 mb-7">
        {descripcion}
      </p>
    </>
  );
}
