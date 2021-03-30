import { Image, useColorModeValue } from "@chakra-ui/react";

const PatternBackground = () => {
  const patternImage = useColorModeValue("/bg-light.svg", "/bg.svg");

  return (
    <>
      <Image
        src={patternImage}
        position="fixed"
        right={["-200px", "-200px", "-200px", "0"]}
        alt="background image pattern top right"
      />
      <Image
        src={patternImage}
        position="fixed"
        left={["-200px", "-200px", "-200px", "0"]}
        bottom="0"
        transform="rotate(180deg)"
        alt="background image pattern bottom left"
      />
    </>
  );
};

export default PatternBackground;
