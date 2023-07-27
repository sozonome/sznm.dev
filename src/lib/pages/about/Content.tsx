'use client';

import type { BoxProps } from '@chakra-ui/react';
import { useColorModeValue, Heading, Text } from '@chakra-ui/react';

import MotionBox from '~/lib/components/motion/MotionBox';

const textProps: BoxProps = {
  marginY: 4,
};

const Content = () => {
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <MotionBox
      variants={{
        before: { opacity: 0, y: 20, transition: { type: 'spring' } },
        after: { opacity: 1, y: 0, transition: { type: 'spring' } },
      }}
      initial="before"
      animate="after"
    >
      <Heading size="lg">👋 Hi, how are you?</Heading>

      <Text {...{ ...textProps, textColor }}>
        I&apos;m Nathan, an experienced Digital Crafter with a strong passion
        for crafting customer-centric tech solutions.
      </Text>

      <Text {...{ ...textProps, textColor }}>
        My expertise lies in working with various technologies, including React
        (TypeScript, Next.js) and Flutter (Dart). Throughout my career, I have
        honed skills in developing tech products that delight users and drive
        business success.
      </Text>

      <Text {...{ ...textProps, textColor }}>
        Sometimes I share fun and exciting projects through this site. I&apos;m
        passionate about design and leading high-performing teams to success.
      </Text>
    </MotionBox>
  );
};

export default Content;
