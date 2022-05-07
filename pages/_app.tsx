import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Hero from "../ui/components/hero/index"
import Carousel from "../ui/components/carousel/index"
import Navbar from "../ui/components/navbar/index"
import Navbar2 from "../ui/components/navbarv2/index"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        {/* navbar tests */}
        <Navbar />
        <Navbar2 />
        <Carousel />
        <Hero />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
