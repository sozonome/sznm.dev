import { Icon, Link, Tooltip } from "@chakra-ui/react";

import MotionBox from "lib/components/motion/MotionBox";
import { trackEventToUmami } from "lib/utils/trackEvent";

import { childAnimationProps } from "./constants";
import type { MotionLinkProps } from "./types";

const MotionLink = (props: MotionLinkProps) => {
  const { platformName, url, icon } = props;

  const handleClickLink = () => {
    trackEventToUmami({
      eventValue: `About: Click Social Link - ${platformName} | ${url}`,
      eventType: "link",
    });
  };

  return (
    <MotionBox {...childAnimationProps}>
      <Tooltip label={platformName}>
        <Link href={url} isExternal onClick={handleClickLink}>
          <Icon as={icon} fontSize="2xl" />
        </Link>
      </Tooltip>
    </MotionBox>
  );
};

export default MotionLink;
