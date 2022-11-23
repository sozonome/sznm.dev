import { Text } from "@chakra-ui/react";

import MotionBox from "lib/components/motion/MotionBox";
import MotionFlex from "lib/components/motion/MotionFlex";
import {
  staggerAnimationProps,
  wrapperAnimationProps,
} from "lib/constants/animation";

import { socialLinks } from "./constants";
import MotionLink from "./MotionLink";

const Links = () => {
  return (
    <MotionBox marginY={4} {...wrapperAnimationProps}>
      <Text fontStyle="italic" color="gray">
        1.01 ^365 = 37.7
      </Text>

      <MotionFlex
        flexWrap="wrap"
        gridGap={4}
        marginTop={4}
        {...staggerAnimationProps}
      >
        {socialLinks.map((link) => (
          <MotionLink {...link} key={link.url} />
        ))}
      </MotionFlex>
    </MotionBox>
  );
};

export default Links;
