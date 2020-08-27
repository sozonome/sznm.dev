import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Flex, Image, Text, PseudoBox } from "@chakra-ui/core";

type CardProps = {
  title: string;
  img: string;
  link?: string;
};

const Card = ({ title, img, link }: CardProps) => {
  const router = useRouter();
  return (
    <PseudoBox
      display="flex"
      width="47%"
      height={120}
      backgroundColor="white"
      boxShadow="0px 24px 24px -16px rgba(38, 46, 51, 0.1);"
      alignItems="center"
      borderRadius={20}
      onClick={() => (link ? router.push(link) : null)}
      cursor={link ? "pointer" : "none"}
      _even={{ marginLeft: "5%" }}
      marginBottom={"5%"}
    >
      <Box flexBasis={["45%", "30%"]}>
        <Image src={img} width={50} margin="auto" />
      </Box>
      <Box flexBasis={["55%", "70%"]}>
        <Text fontWeight={600} fontSize="lg">
          {title}
        </Text>
      </Box>
    </PseudoBox>
  );
};

export default Card;
