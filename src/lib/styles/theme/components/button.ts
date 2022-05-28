import type { DeepPartial, Theme } from "@chakra-ui/react";

export const Button: DeepPartial<Theme["components"]["Button"]> = {
  baseStyle: {
    borderRadius: "1rem",
    _hover: {
      borderColor: "gray",
      borderWidth: 2,
      shadow: "sm",
    },
  },
};
