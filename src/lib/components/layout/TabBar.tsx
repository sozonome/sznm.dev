import { Flex, useColorModeValue } from "@chakra-ui/react";

import Navigation from "./Navigation";

const TabBar = () => {
  const backgroundColor = useColorModeValue(
    "rgba(237, 242, 247, 0.8)",
    "rgba(45, 55, 72, 0.8)"
  );

  return (
    <Flex
      position="fixed"
      layerStyle="blur-bg"
      zIndex={10}
      display={["flex", "none"]}
      marginX={["5%", "3%", "2%", 0]}
      width={["90%", "94%", "82%", 800]}
      height={["4.5rem", "8rem"]}
      bottom={22}
      borderRadius={20}
      backgroundColor={backgroundColor}
      padding={22}
      textAlign="center"
      alignItems="center"
      fontSize={[35, 50]}
    >
      <Navigation />
    </Flex>
  );
};

export default TabBar;
