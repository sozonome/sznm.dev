'use client';

import { Icon, Link, Tooltip } from '@chakra-ui/react';
import * as React from 'react';

import MotionBox from '~/lib/components/motion/MotionBox';
import { childAnimationProps } from '~/lib/constants/animation';
import { EVENT_TYPE_LINK } from '~/lib/constants/tracking';
import { trackEvent } from '~/lib/utils/trackEvent';

import type { MotionLinkProps } from './types';

const MotionLink = (props: MotionLinkProps) => {
  const { platformName, url, icon } = props;

  const handleClickLink = React.useCallback(() => {
    trackEvent({
      eventName: `About: Click Social Link - ${platformName} | ${url}`,
      eventData: { type: EVENT_TYPE_LINK },
    });
  }, [platformName, url]);

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
