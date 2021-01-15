import { Flex, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Navigation from "./Navigation";

const MotionFlex = motion.custom(Flex);

const TabBar = () => {
  const backgroundColor = useColorModeValue(
    "rgba(237, 242, 247, 0.8)",
    "rgba(45, 55, 72, 0.8)"
  );

  return (
    <MotionFlex
      marginX={["5%", "3%", "2%", 0]}
      position="fixed"
      width={["90%", "94%", "82%", 800]}
      height={["6rem", "8rem"]}
      bottom={22}
      borderRadius={20}
      // boxShadow="0px 0px 32px 2px rgba(38, 46, 51, 0.4)"
      backgroundColor={backgroundColor}
      style={{ backdropFilter: "blur(6px)" }}
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
