import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
