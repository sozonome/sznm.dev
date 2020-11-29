import {
  Box,
  Button,
  Heading,
  Text,
  Link as ChakraLink,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import MotionBox from "../components/motion/MotionBox";

const Page404 = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <MotionBox
        width={["100%", "70%", "60%", "60%"]}
        margin="0 auto"
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
      >
        <Image unsized src="/404 Error-rafiki.svg" />
      </MotionBox>
      <Text textAlign="center" fontSize="xs">
        <ChakraLink href="https://stories.freepik.com/web" isExternal>
          Illustration by Freepik Stories
        </ChakraLink>
      </Text>

      <Box marginY={4}>
        <Heading textAlign="center">Seems like you're lost.</Heading>

        <Box textAlign="center">
          <Link href="/" passHref>
            <Button
              backgroundColor={colorMode === "light" ? "gray.300" : "gray.500"}
            >
              Let's Head Back
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Page404;
