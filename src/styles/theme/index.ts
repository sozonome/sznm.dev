import { extendTheme } from "@chakra-ui/react";

import Button from "./components/button";
import Code from "./components/code";
import colors from "./colors";
import fonts from "./fonts";
import layerStyles from "./layerStyles";

const customTheme = extendTheme({
  colors,
  fonts,
  components: {
    Button,
    Code,
  },
  config: {
    initialColorMode: "dark",
  },
  layerStyles,
});

export default customTheme;
