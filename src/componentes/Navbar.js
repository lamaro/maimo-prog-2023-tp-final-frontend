import React, { useState , useEffect} from "react";
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
import { useCartContext } from '@/contexts/Cartcontext';


function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0);

  // Obtenemos el contexto del carrito
  const { cart } = useCartContext();

  useEffect(() => {
    // Actualizamos la cantidad en el carrito cada vez que cambie el carrito
    setCantidadEnCarrito(cart.length);
  }, [cart]);
  const menuItems = [
    { label: "Productos", path: "/helados" },
    { label: "Conocenos", path: "/about" },
    { label: "Contactanos", path: "/contact" },
  ];

  return (
    <Navbar
      className="bg-transparent text-black lowercase place-content-between"
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
        <NavbarBrand className="ml-auto">
        <Link href="/">
          <ReactSVG
            src="/assets/gelatella-navbar.svg"
            width={120}
            height={48}
            alt="Logo Gelatella Heladería"
            className="text-white"
          />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 place-content-between" justify="center">
        <NavbarBrand className="ml-auto">
          <Link href="/">
          <ReactSVG
            src="/assets/gelatella-navbar.svg"
            width={120}
            height={48}
            alt="Logo Gelatella Heladería"
            className="text-white"
          />
          </Link>
        </NavbarBrand>
        <NavbarContent className="mx-auto justify-center space-x-4">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item.label}-${index}`}>
              <Link href={item.path}>{item.label}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
        <Link href={"/checkout"}><FaShoppingCart size={24} />
            <span className="px-2">({cantidadEnCarrito})</span></Link>
            
            
          
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
