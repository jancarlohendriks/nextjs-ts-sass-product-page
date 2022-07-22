import type { AppProps } from "next/app";
import ProductsProvider from "../context/state";
import "../styles/app.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <Component {...pageProps} />
    </ProductsProvider>
  );
}

export default MyApp;
