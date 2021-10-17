import { DeepPartial, Theme } from "@chakra-ui/react";

const styles: DeepPartial<Theme["styles"]> = {
  global: (props) => ({
    // custom scrollbar
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
  }),
};

export default styles;
