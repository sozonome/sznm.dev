import { Box, Image, Text, PseudoBox } from "@chakra-ui/core";
import { useRouter, withRouter } from "next/router";
import { getStaticProps } from "../pages";
import { useEffect } from "react";

type CardProps = {
  title: string;
  img?: string;
  link?: string;
  route?: string;
};

const Card = ({ title, img, link, route }: CardProps) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    route ? router.push(route, link) : router.push(link);
  };

  useEffect(() => {
    route ? router.prefetch(route, link) : router.push(link);
  }, []);

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
        <Text fontWeight={600} fontSize="lg">
          {title}
        </Text>
      </Box>
    </PseudoBox>
  );
};

export default Card;
