import { DeepPartial, Theme } from "@chakra-ui/react";

const styles: DeepPartial<Theme["styles"]> = {
  global: (props) => ({
    /**
     * custom scrollbar
     * https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar#browser_compatibility
     */
    "::-webkit-scrollbar": {
      width: "0.75rem",
      height: "0.75rem",
      backgroundColor: props.colorMode === "light" ? "gray.300" : "black",
    },
    "::-webkit-scrollbar-thumb": {
      borderRadius: "full",
      backgroundColor: props.colorMode === "light" ? "gray.400" : "gray.700",
      "&:hover": {
        backgroundColor: props.colorMode === "light" ? "gray.500" : "gray.600",
      },
    },
    /**
     * firefox scrollbar
     * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scrollbars#browser_compatibility
     */
    html: {
      scrollbarWidth: "thin",
      scrollbarColor: `${props.colorMode === "light" ? "#A0AEC0" : "#2D3748"} ${
        props.colorMode === "light" ? "#CBD5E0" : "black"
      }`,
    },
  }),
};

export default styles;
