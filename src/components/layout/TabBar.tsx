import { Flex, Box, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faRocket,
  faUser,
  faFeatherAlt,
} from "@fortawesome/free-solid-svg-icons";

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
      backgroundColor={colorMode === "light" ? "gray.100" : "teal.600"}
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
    >
      <Link href="/" passHref>
        <Box as="a" flexBasis={"25%"}>
          <FontAwesomeIcon icon={faHome} style={{ cursor: "pointer" }} />
        </Box>
      </Link>
      <Link href="/projects" passHref>
        <Box as="a" flexBasis={"25%"}>
          <FontAwesomeIcon icon={faRocket} style={{ cursor: "pointer" }} />
        </Box>
      </Link>
      <Link href="/blog" passHref>
        <Box as="a" flexBasis={"25%"}>
          <FontAwesomeIcon icon={faFeatherAlt} style={{ cursor: "pointer" }} />
        </Box>
      </Link>
      <Link href="/about" passHref>
        <Box as="a" flexBasis={"25%"}>
          <FontAwesomeIcon icon={faUser} style={{ cursor: "pointer" }} />
        </Box>
      </Link>
    </MotionFlex>
  );
};

export default TabBar;
