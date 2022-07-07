import type { HTMLChakraProps } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";

import type { Merge } from "lib/types/merge";

type MotionGridProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

const MotionGrid: FC<MotionGridProps> = motion(Grid);

export default MotionGrid;
