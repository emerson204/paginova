import Image from "next/image";

export default function CardServicio({ imagen, subtitulo, descripcion }) {
  return (
    <div
      className="text-center shadow-lg border dark:shadow-none dark:border-white/10 border-gray-50 md:shadow-gray-200 shadow-gray-100 py-8 px-5 rounded-md"
      data-aos="zoom-in"
    >
      <Image
        src={imagen}
        alt="icono servicios"
        width="55"
        height="55"
        className="mx-auto mb-5 w-[3.125rem] md:w-[3.4375rem]"
      />
      <div>
        <h3 className="text-xl poppins-medium mb-2">{subtitulo}</h3>
        <p className="text-sm poppins-light">{descripcion}</p>
      </div>
    </div>
  );
}
