import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  ...theme,
  fonts: {
    ...theme.fonts,
    heading: "Catamaran, sans-serif",
    body: "Recursive, sans-serif",
  },
  colors: {
    ...theme.colors,
    orange: {
      ...theme.colors.orange,
      // secondary
      600: "#ba4c00",
      400: "#f47b00",
      200: "#ffac42",

      // tertiary
      900: "#5F4A37",
      700: "#7F6E5F",
      500: "#9F9287",
      300: "#BFB7AF",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: "Catamaran, sans-serif",
        borderRadius: 16,
      },
    },
  },
  config: {
    initialColorMode: "dark",
  },
});

export const responsiveWidthProps = {
  paddingY: 22,
  paddingX: [22, 22, 11, 0],
};

export default customTheme;
