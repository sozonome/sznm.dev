import { HTMLMotionProps, motion } from "framer-motion";
import { Box, HTMLChakraProps } from "@chakra-ui/react";
import { FC } from "react";

import { Merge } from "../../models/merge";

type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

const MotionBox: FC<MotionBoxProps> = motion(Box);

export default MotionBox;
