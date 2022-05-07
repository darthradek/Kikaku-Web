import Navbar from "../components/navbar/index";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import SimpleSidebar from "../components/sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <SimpleSidebar />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
