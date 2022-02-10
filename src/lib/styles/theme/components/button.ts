import type { DeepPartial, Theme } from "@chakra-ui/react";

export const Button: DeepPartial<Theme["components"]["Button"]> = {
  baseStyle: {
    borderRadius: "1rem",
    _hover: {
      transform: "translateY(-2px) scale(1.02, 1.02)",
      borderColor: "teal.500",
      borderWidth: 2,
      shadow: "sm",
    },
  },
};
