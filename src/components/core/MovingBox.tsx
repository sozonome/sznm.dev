import React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/core";

const MotionBox = motion.custom(Box);

const MovingBox = () => {
  return (
    <MotionBox
      size="40px"
      bg="red.300"
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    />
  );
};

export default MovingBox;
