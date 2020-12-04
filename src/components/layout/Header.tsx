import Link from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";

import ThemeToggle from "./ThemeToggle";

import { responsiveWidthProps } from "../../styles/customTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFeatherAlt,
  faHome,
  faRocket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Flex as="header" {...responsiveWidthProps} alignItems="center">
      <Link href="/" passHref>
        <Text as="a" cursor="pointer" fontSize={["lg", "2xl"]}>
          sznm.dev
        </Text>
      </Link>

      <Flex marginLeft="auto" alignItems="center">
        <Flex width="10rem" display={["none", "flex"]}>
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
              <FontAwesomeIcon
                icon={faFeatherAlt}
                style={{ cursor: "pointer" }}
              />
            </Box>
          </Link>
          <Link href="/about" passHref>
            <Box as="a" flexBasis={"25%"}>
              <FontAwesomeIcon icon={faUser} style={{ cursor: "pointer" }} />
            </Box>
          </Link>
        </Flex>

        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

export default Header;
