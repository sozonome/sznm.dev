import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "typeface-work-sans";
import "typeface-markazi-text";

import customTheme from "../styles/theme";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/global.css";

config.autoAddCss = false;
library.add(fab);

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
