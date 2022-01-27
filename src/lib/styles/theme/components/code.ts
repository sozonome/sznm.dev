import { DeepPartial, Theme } from "@chakra-ui/react";

export const Code: DeepPartial<Theme["components"]["Code"]> = {
  baseStyle: {
    borderRadius: "0.25rem",
  },
  defaultProps: {
    colorScheme: "gray",
    variant: "solid",
  },
};
