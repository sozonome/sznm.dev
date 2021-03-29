import { HTMLMotionProps, motion } from "framer-motion";
import { Box, HTMLChakraProps } from "@chakra-ui/react";

import { Merge } from "../../models/merge";
import { FC } from "react";

type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

const MotionBox: FC<MotionBoxProps> = motion(Box);

export default MotionBox;
