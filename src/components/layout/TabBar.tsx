import { Flex, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Navigation from "./Navigation";

const MotionFlex = motion.custom(Flex);

const TabBar = () => {
  const { colorMode } = useColorMode();

  return (
    <MotionFlex
      marginX={["5%", "3%", "2%", 0]}
      position="fixed"
      width={["90%", "94%", "82%", 800]}
      height={["6rem", "8rem"]}
      bottom={22}
      borderRadius={20}
      boxShadow="0px 0px 32px 2px rgba(38, 46, 51, 0.4)"
      backgroundColor={colorMode === "light" ? "gray.100" : "gray.600"}
      padding={22}
      textAlign="center"
      alignItems="center"
      fontSize={[35, 50]}
      //motion API
      variants={{
        before: { opacity: 0, y: 200, transition: { type: "spring" } },
        after: { opacity: 1, y: 0, transition: { type: "spring", delay: 0.3 } },
      }}
      initial="before"
      animate="after"
      display={["flex", "none"]}
    >
      <Navigation />
    </MotionFlex>
  );
};

export default TabBar;
