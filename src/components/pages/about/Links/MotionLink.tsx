import { Icon, Link } from "@chakra-ui/react";

import MotionBox from "components/motion/MotionBox";

import { childAnimationProps } from "./constants";
import { MotionLinkProps } from "./types";

const MotionLink = (props: MotionLinkProps) => {
  const { url, icon } = props;

  return (
    <MotionBox {...childAnimationProps}>
      <Link href={url} isExternal>
        <Icon as={icon} fontSize="2xl" />
      </Link>
    </MotionBox>
  );
};

export default MotionLink;
