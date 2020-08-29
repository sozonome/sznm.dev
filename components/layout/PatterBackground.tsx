import { Image } from "@chakra-ui/core";

const PatternBackground = () => {
  return (
    <>
      <Image
        src={"/bg.svg"}
        position="fixed"
        right={["-200px", "-200px", "-200px", "0"]}
        alt="background image pattern top right"
      />
      <Image
        src={"/bg.svg"}
        position="fixed"
        left={["-200px", "-200px", "-200px", "0"]}
        bottom="0"
        transform="rotate(180deg)"
        alt="background image pattern bottom left"
      />{" "}
    </>
  );
};

export default PatternBackground;
