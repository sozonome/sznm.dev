import type { DeepPartial, Theme } from "@chakra-ui/react";

import { Button } from "./button";
import { Code } from "./code";
import { Heading } from "./heading";

export const components: DeepPartial<Theme["components"]> = {
  Button,
  Code,
  Heading,
};
