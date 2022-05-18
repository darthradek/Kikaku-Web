import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const customTheme = extendTheme({
    colors: {
      backgroundPrimary: "#F2F2F2",
      backgroundSecondary: "#43474b",
      highlightPrimary: "#ffc107",
      highlightSecondary: "#7952b3",
    },
  });

  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
