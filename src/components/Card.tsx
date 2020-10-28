import { Box, Text, PseudoBox, Flex } from "@chakra-ui/core";
import { motion } from "framer-motion";
import Image from "next/image";

type CardProps = {
  title: string;
  img?: string;
  handleClick?: () => void;
};

const MotionCard = motion.custom(PseudoBox);

const Card = ({ title, img, handleClick }: CardProps) => {
  return (
    <MotionCard
      //chakra props
      as="button"
      display="flex"
      width={["100%", "47%"]}
      height={120}
      backgroundColor="teal.700"
      boxShadow="0px 0px 32px 2px rgba(38, 46, 51, 0.1);"
      alignItems="center"
      borderRadius={20}
      cursor={"pointer"}
      _even={{ marginLeft: [0, "5%"] }}
      marginBottom={"5%"}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
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
      <Flex flexBasis={["35%", "30%"]} justifyContent="center">
        {img && <Image src={img} width={50} height={50} alt={title} />}
      </Flex>
      <Box flexBasis={["65%", "70%"]}>
        <Text fontWeight={600} fontSize="lg">
          {title}
        </Text>
      </Box>
    </MotionCard>
  );
};

export default Card;
