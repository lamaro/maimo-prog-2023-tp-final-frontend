import "@/styles/globals.css";
import { CartProvider } from "@/contexts/Cartcontext";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </NextUIProvider>

  );
}
