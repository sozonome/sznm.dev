import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/recursive/latin.css";
import "@fontsource/catamaran/latin.css";

import Layout from "../components/layout";

import customTheme from "../styles/customTheme";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
