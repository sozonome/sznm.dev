import { Flex, Box } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faRocket,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const TabBar = () => {
  return (
    <Flex
      marginX={["5vw", "5vw", 0]}
      position="fixed"
      width={["90vw", "90vw", 800]}
      height={[96, 128]}
      bottom={22}
      borderRadius={20}
      boxShadow="0px 0px 32px 2px rgba(38, 46, 51, 0.4)"
      backgroundColor="teal.500"
      padding={22}
      textAlign="center"
      alignItems="center"
      fontSize={[35, 50]}
    >
      <Link href="/">
        <Box flexBasis={"25%"}>
          <FontAwesomeIcon icon={faHome} style={{ cursor: "pointer" }} />
        </Box>
      </Link>
      <Link href="/projects">
        <Box flexBasis={"25%"}>
          <FontAwesomeIcon icon={faRocket} style={{ cursor: "pointer" }} />
        </Box>
      </Link>
      <Link href="mailto:hello@sznm.dev">
        <Box flexBasis={"25%"}>
          <FontAwesomeIcon icon={faEnvelope} style={{ cursor: "pointer" }} />
        </Box>
      </Link>
      <Link href="/about">
        <Box flexBasis={"25%"}>
          <FontAwesomeIcon icon={faUser} style={{ cursor: "pointer" }} />
        </Box>
      </Link>
    </Flex>
  );
};

export default TabBar;
