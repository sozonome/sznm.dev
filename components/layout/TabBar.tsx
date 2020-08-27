import React from "react";
import { Flex, Box } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faRocket,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const TabBar = () => {
  return (
    <Flex
      marginX={["5vw", "5vw", 0]}
      position="fixed"
      width={["90vw", "90vw", 800]}
      height={[96, 128]}
      bottom={22}
      borderRadius={20}
      boxShadow="0px 0px 32px 2px rgba(38, 46, 51, 0.1);"
      backgroundColor="white"
      padding={22}
      color="blue.900"
      textAlign="center"
      alignItems="center"
      fontSize={[35, 50]}
    >
      <Box flexBasis={"25%"}>
        <FontAwesomeIcon icon={faHome} />
      </Box>
      <Box flexBasis={"25%"}>
        <FontAwesomeIcon icon={faRocket} />
      </Box>
      <Box flexBasis={"25%"}>
        <FontAwesomeIcon icon={faEnvelope} />
      </Box>
      <Box flexBasis={"25%"}>
        <FontAwesomeIcon icon={faUser} />
      </Box>
    </Flex>
  );
};

export default TabBar;
