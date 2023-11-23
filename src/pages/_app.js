import "@/styles/globals.css";
import { CartProvider } from "@/contexts/Cartcontext";
import { BOContextProvider } from "@/contexts/BOContext";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <BOContextProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
      </BOContextProvider>
    </NextUIProvider>

  );
}
