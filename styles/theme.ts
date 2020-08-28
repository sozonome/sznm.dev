/**
 * @todo
 * [ ] re-pick colors to support a11y
 */

import { theme, DefaultTheme } from "@chakra-ui/core";

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: "Work Sans, sans-serif",
    heading: "Markazi Text, serif",
  },
  colors: {
    ...theme.colors,
    blue: {
      //primary
      ...theme.colors.blue,
      900: "#65C9FF",
      700: "#84D4FF",
      500: "#A3DFFF",
      300: "#C1E9FF",
      100: "#E0F4FF",
      50: "#F1FAFF",
    },
    orange: {
      ...theme.colors.orange,
      // secondary
      800: "#EDB98A",
      600: "#F1C7A1",
      400: "#F4D5B9",
      200: "#F8E3D0",
      50: "#FBF1E8",

      // tertiary
      900: "#5F4A37",
      700: "#7F6E5F",
      500: "#9F9287",
      300: "#BFB7AF",
    },
    gray: {
      ...theme.colors.gray,
      900: "#262E33",
      700: "#51585C",
      500: "#7D8285",
      300: "#A8ABAD",
      100: "#D4D5D6",
    },
  },
};

export default customTheme;
