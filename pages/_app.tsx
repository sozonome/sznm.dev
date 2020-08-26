import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "typeface-work-sans";
import "typeface-markazi-text";

import customTheme from "../styles/theme";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
