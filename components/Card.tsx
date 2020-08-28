import { Box, Image, Text, PseudoBox } from "@chakra-ui/core";
import { useRouter } from "next/router";
import { useEffect } from "react";

type CardProps = {
  title: string;
  img?: string;
  handleClick?: () => void;
};

const Card = ({ title, img, handleClick }: CardProps) => {
  return (
    <PseudoBox
      display="flex"
      width={["100%", "47%"]}
      height={120}
      backgroundColor="white"
      boxShadow="0px 24px 24px -16px rgba(38, 46, 51, 0.1);"
      alignItems="center"
      borderRadius={20}
      cursor={"pointer"}
      _even={{ marginLeft: [0, "5%"] }}
      marginBottom={"5%"}
      onClick={handleClick}
    >
      <Box flexBasis={["35%", "30%"]}>
        {img && <Image src={img} width={50} margin="auto" />}
      </Box>
      <Box flexBasis={["65%", "70%"]}>
        <Text fontWeight={600} fontSize="lg" color="orange.700">
          {title}
        </Text>
      </Box>
    </PseudoBox>
  );
};

export default Card;
