import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

import MotionBox from "./motion/MotionBox";

type CardProps = {
  title: string;
  img?: string;
  handleClick?: () => void;
};

const Card = ({ title, img, handleClick }: CardProps) => {
  const backgroundColor = useColorModeValue("gray.200", "gray.600");

  return (
    <MotionBox
      //chakra props
      backgroundColor={backgroundColor}
      boxShadow="0px 0px 32px 2px rgba(38, 46, 51, 0.1);"
      borderRadius={20}
      cursor={"pointer"}
      onClick={handleClick}
      //motion API
      variants={{
        before: {
          opacity: 0,
          y: 20,
          transition: {
            type: "spring",
            damping: 16,
            stiffness: 200,
          },
        },
        after: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 16,
            stiffness: 200,
          },
        },
      }}
    >
      <Flex alignItems="center" height={120}>
        <Flex flexBasis={["35%", "30%"]} justifyContent="center">
          {img && <Image src={img} width={50} height={50} alt={title} />}
        </Flex>
        <Box flexBasis={["65%", "70%"]}>
          <Text
            fontWeight={600}
            fontSize="lg"
            fontFamily="Catamaran, sans-serif"
          >
            {title}
          </Text>
        </Box>
      </Flex>

      <Box>{/* <Image /> */}</Box>
    </MotionBox>
  );
};

export default Card;
