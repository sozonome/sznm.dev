import { Text } from "@chakra-ui/react";

import MotionBox from "components/motion/MotionBox";
import MotionFlex from "components/motion/MotionFlex";

import {
  socialLinks,
  staggerAnimationProps,
  wrapperAnimationProps,
} from "./constants";
import MotionLink from "./MotionLink";

const Links = () => {
  return (
    <MotionBox marginY={4} {...wrapperAnimationProps}>
      <Text fontStyle="italic">1.01 ^365 = 37.7</Text>

      <MotionFlex
        wrap="wrap"
        fontSize="4xl"
        gridGap={4}
        marginTop={4}
        {...staggerAnimationProps}
      >
        {socialLinks.map((link) => (
          <MotionLink {...link} />
        ))}
      </MotionFlex>
    </MotionBox>
  );
};

export default Links;
