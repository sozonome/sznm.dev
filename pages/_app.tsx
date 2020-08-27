import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "typeface-work-sans";
import "typeface-markazi-text";
import { config } from "@fortawesome/fontawesome-svg-core";

import customTheme from "../styles/theme";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/global.css";

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
