import { linksNav } from "@/data/linksNav";
import Link from "next/link";
import React from "react";

export default function NavLinks({ onClickLink }) {
  return (
    <ul className="flex flex-col md:flex-row ml-2 md:ml-0 gap-8 md:gap-10 md:items-center text-left md:text-center">
      {linksNav.map((item) => (
        <li
          key={item.id}
          onClick={onClickLink}
          className="after:content-[''] after:absolute relative after:w-[6rem] md:after:w-0 after:h-[0.125rem] after:bg-black after:left-0 after:-bottom-1 after:rounded-full md:hover:after:w-full after:transition-all ease-in-out duration-300 dark:text-white tracking-wide uppercase text-sm"
        >
          <Link href={item.url}>{item.titulo}</Link>
        </li>
      ))}
    </ul>
  );
}
