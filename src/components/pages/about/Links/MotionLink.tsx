import { Icon, Link, Tooltip } from "@chakra-ui/react";

import MotionBox from "components/motion/MotionBox";

import { childAnimationProps } from "./constants";
import { MotionLinkProps } from "./types";

const MotionLink = (props: MotionLinkProps) => {
  const { platformName, url, icon } = props;

  return (
    <MotionBox {...childAnimationProps}>
      <Tooltip label={platformName}>
        <Link href={url} isExternal>
          <Icon as={icon} fontSize="2xl" />
        </Link>
      </Tooltip>
    </MotionBox>
  );
};

export default MotionLink;
