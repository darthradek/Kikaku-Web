import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "../components/navbar/index";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import SimpleSidebar from "../components/sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
      <Navbar />
<<<<<<< HEAD
      <SimpleSidebar />

=======
>>>>>>> chakra-setup
      <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
