'use client';

import { Text } from '@chakra-ui/react';

import { MotionBox } from '~/lib/components/motion/motion-box';
import { MotionFlex } from '~/lib/components/motion/motion-flex';
import {
  staggerAnimationProps,
  wrapperAnimationProps,
} from '~/lib/constants/animation';

import { mainLinks, publishingLinks, socialLinks } from './constants';
import { MotionLink } from './motion-link';

export const SocialLinks = () => {
  return (
    <MotionBox marginY={4} {...wrapperAnimationProps}>
      <Text fontStyle="italic">1.01 ^365 = 37.7</Text>

      <MotionFlex
        flexWrap="wrap"
        gridGap={4}
        marginTop={4}
        {...staggerAnimationProps}
      >
        {mainLinks.map((link) => (
          <MotionLink {...link} key={link.url} />
        ))}
      </MotionFlex>

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

      <MotionFlex
        flexWrap="wrap"
        gridGap={4}
        marginTop={4}
        {...staggerAnimationProps}
      >
        {publishingLinks.map((link) => (
          <MotionLink {...link} key={link.url} />
        ))}
      </MotionFlex>
    </MotionBox>
  );
};
