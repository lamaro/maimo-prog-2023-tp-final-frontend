import React, { useState } from "react";
import { Accordion, AccordionItem, Button, Card, CardBody, CardHeader, Image} from '@nextui-org/react';
import Link from "next/link";
// import { useAppContext } from "@/contexts/Cartcontext";
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
    "Productos",
    "Conocenos",
    "Newsletter",
    "Contactanos",
  ];

  return (
    <Navbar className="bg-transparent text-black lowercase" isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image
            src="public/assets/gelatella.png"
            alt="logo Gelatella Heladería"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Image
            src="public/assets/gelatella.png"
            alt="logo Gelatella Heladería"
          />
        </NavbarBrand>
        <NavbarItem>
          <Link href="/helados">Productos</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/about">Conocenos</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#new">Newsletter</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#new">Contactanos</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" >
        <NavbarItem>
          <NextUILink href="#new" className="text-black">
            <FaShoppingCart size={24}  />
            <span className="px-2">({cantidadEnCarrito})</span>
          </NextUILink>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarComponent;