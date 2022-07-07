import { Box, Heading, Text } from "@chakra-ui/react";

import MotionBox from "lib/components/motion/MotionBox";

const HeroSection = () => {
  return (
    <Box height="90vh" alignItems="center" display="grid">
      <MotionBox
        variants={{
          before: { opacity: 0, y: 20, transition: { type: "spring" } },
          after: { opacity: 1, y: 0, transition: { type: "spring" } },
        }}
        initial="before"
        animate="after"
      >
        <Box
          verticalAlign="center"
          width={["100%", "80%", "60%"]}
          marginTop={[8, 0]}
          alignSelf={["none", "center"]}
        >
          <Heading as="h1" size="xl" paddingBottom={11}>
            Hello! I&apos;m Nathan.
          </Heading>
          <Text fontSize={["md", "xl"]}>
            Digital crafter specializing in Frontend development.
          </Text>
        </Box>
      </MotionBox>
    </Box>
  );
};

export default HeroSection;
