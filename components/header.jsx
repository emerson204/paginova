"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavLinks from "./navLinks";
import NavMobile from "./navMobile";
import { ToggleDark } from "./toggleDark";

export default function Header() {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scroll
          ? "backdrop-blur-lg bg-white/30 dark:bg-[#0b1313]/50"
          : "bg-white dark:bg-black"
      } py-2 px-5 sticky top-0 z-50`}
    >
      <div className="max-w-[75rem] mx-auto flex items-center justify-between">
        <div>
          <Image
            src="https://res.cloudinary.com/dgzphcnpw/image/upload/f_auto,q_auto/v1738805727/p-web_szskcm.png"
            alt="logo"
            width="65"
            height="65"
            className="w-[3.20rem] md:w-[4.0625rem]"
          />
        </div>

        <nav className="hidden md:block">
          <NavLinks />
        </nav>

        <div className=" flex items-center gap-4 ">
          <ToggleDark />

          <div className="md:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
}
