import { Box, HTMLChakraProps } from "@chakra-ui/react";
import { HTMLMotionProps, motion } from "framer-motion";
import { FC } from "react";

import { Merge } from "lib/types/merge";

type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

const MotionBox: FC<MotionBoxProps> = motion(Box);

export default MotionBox;
