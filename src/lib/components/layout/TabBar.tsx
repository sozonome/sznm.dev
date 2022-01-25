import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

import Navigation from "./Navigation";

const TabBar = () => {
  const backgroundColor = useColorModeValue(
    "rgba(237, 242, 247, 0.8)",
    "rgba(45, 55, 72, 0.8)"
  );

  return (
    <Box position="fixed" bottom={22} zIndex={10} layerStyle="layoutBlock">
      <Flex
        layerStyle="blur-bg"
        display={["flex", "none"]}
        height={["4.5rem", "8rem"]}
        borderRadius={20}
        backgroundColor={backgroundColor}
        padding={22}
        textAlign="center"
        alignItems="center"
        fontSize={[35, 50]}
      >
        <Navigation />
      </Flex>
    </Box>
  );
};

export default TabBar;
