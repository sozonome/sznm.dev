import { DeepPartial, Theme } from "@chakra-ui/react";

const Code: DeepPartial<Theme["components"]["Code"]> = {
  baseStyle: {
    borderRadius: "0.25rem",
  },
  defaultProps: {
    colorScheme: "gray",
    variant: "solid",
  },
};

export default Code;
