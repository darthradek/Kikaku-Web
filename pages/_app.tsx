import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "../components/navbar/index";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Sidebar from "../components/sidebar/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
      <Navbar />
      <Sidebar children={undefined} />

      <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
