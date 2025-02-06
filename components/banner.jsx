import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section className=" lg:max-w-[75rem] md:max-w-[45rem] mx-auto bg-[url('https://res.cloudinary.com/dgzphcnpw/image/upload/f_auto,q_auto/v1735347762/banner-mobile_cricdx.jpg')] md:bg-[url('https://res.cloudinary.com/dgzphcnpw/image/upload/f_auto,q_auto/v1735347777/banner-desktop_nk3ofp.jpg')] bg-cover bg-center bg-no-repeat h-[19rem] md:h-[22rem] lg:h-[28rem] relative after:content-[''] after:absolute after:bg-black/55 md:after:rounded-[3rem] after:inset-0 md:rounded-[3rem]">
      <div
        className="flex flex-col justify-center items-center text-white h-full relative z-10"
        data-aos="zoom-in"
      >
        <h2 className="text-[1.6rem] px-1 md:px-0 md:text-[2.1rem] leading-[1.8rem] md:leading-[2.4rem] lg:text-[2.625rem] lg:leading-[2.8rem] poppins-semibold text-center lg:max-w-[75%] mb-3">
          Tu presencia en la web comienza aquí.
        </h2>
        <p className="text-center text-sm md:text-lg poppins-medium mb-5">
          Conoce más y síguenos en Instagram.
        </p>

        <Link
          href="https://www.instagram.com/paginova.pe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          className="bg-white w-fit text-black text-sm md:text-base py-[0.625rem] md:py-3 px-5 rounded-full  cursor-pointer  flex items-center gap-2 "
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
    </section>
  );
}
