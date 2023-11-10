import "@/styles/globals.css";
import { CartProvider } from "@/contexts/Cartcontext";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
