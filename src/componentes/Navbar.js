import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link as NextUILink,
} from "@nextui-org/react";

function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0);

  const agregarAlCarrito = () => {
    setCantidadEnCarrito(cantidadEnCarrito + 1);
  };

  const menuItems = [
    { label: "Productos", path: "/helados" },
    { label: "Conocenos", path: "/about" },
    { label: "Newsletter", path: "#new" },
    { label: "Contactanos", path: "#new" },
  ];

  return (
    <Navbar
      className="bg-transparent text-black lowercase"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <ReactSVG
            src="/assets/gelatella.svg"
            width={120}
            height={48}
            alt="Logo Gelatella Heladería"
            className="text-white"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
        <ReactSVG
            src="/assets/gelatella.svg"
            width={120}
            height={48}
            alt="Logo Gelatella Heladería"
            className="text-white"
          />
        </NavbarBrand>
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.label}-${index}`}>
            <Link href={item.path}>{item.label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <NextUILink href="#new" className="text-black">
            <FaShoppingCart size={24} />
            <span className="px-2">({cantidadEnCarrito})</span>
          </NextUILink>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.path}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarComponent;
