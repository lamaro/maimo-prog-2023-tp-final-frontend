import React from "react";
import { useAppContext } from "@/contexts/Cartcontext";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ btnBack }) => {
  return (
    <div className="w-full flex   px-10 text-blue bg-gradient-to-b from-slate-500/100 h-20 items-center justify-between fixed z-20">
      <Link href="/">
        <div>LOGO</div>
      </Link>
      {!btnBack && (
        <div className="">
          <button className="block lg:hidden"><GiHamburgerMenu size='3em'/></button>
          <ul className="hidden lg:flex gap-2  ">
            <li>
              <Link href="/helados">Helados</Link>
            </li>
            <li>
              <Link href="/about">Conocenos</Link>
            </li>
            <li>
              <a href="#new">Newletter</a>
            </li>
          </ul>
        </div>
      )}
      {btnBack && (
        <Link href="/">
          <button className="font-bold text-xl">Back</button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;