import type { HTMLChakraProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";

import type { Merge } from "lib/types/merge";

export type MotionBoxProps = Merge<
  HTMLChakraProps<"div">,
  HTMLMotionProps<"div">
>;

const MotionBox: FC<MotionBoxProps> = motion(Box);

export default MotionBox;
