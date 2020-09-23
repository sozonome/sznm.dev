import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "typeface-work-sans";
import "typeface-markazi-text";

import Layout from "../components/layout";

import customTheme from "../styles/customTheme";
import "../styles/global.css";

config.autoAddCss = false;
library.add(fab);

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
