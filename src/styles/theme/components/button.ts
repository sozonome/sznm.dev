import { DeepPartial, Theme } from "@chakra-ui/react";

const Button: DeepPartial<Theme["components"]["Button"]> = {
  baseStyle: {
    borderRadius: "1rem",
  },
};

export default Button;
