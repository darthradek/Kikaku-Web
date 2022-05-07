import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../ui/components/navbar/index"
import Navbar2 from "../ui/components/navbarv2/index"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        //navbar tests
        <Navbar />
        <Navbar2 />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
