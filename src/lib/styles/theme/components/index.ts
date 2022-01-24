import { DeepPartial, Theme } from "@chakra-ui/react";

import Button from "./button";
import Code from "./code";

const components: DeepPartial<Theme["components"]> = {
  Button,
  Code,
};

export default components;
