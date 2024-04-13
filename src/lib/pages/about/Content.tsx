'use client';

import { Heading, Text, VStack } from '@chakra-ui/react';

import MotionBox from '~/lib/components/motion/MotionBox';

const Content = () => {
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

      <VStack spacing={4} marginTop={4}>
        <Text>
          I&apos;m Nathan, an experienced Digital Crafter with a strong passion
          for crafting user-centric tech solutions.
        </Text>

        <Text>
          My expertise lies in working with various technologies, including
          React (TypeScript, Next.js) and Flutter (Dart). Throughout my career,
          I have honed skills in developing tech products that delight users and
          drive business success.
        </Text>

        <Text>
          Sometimes I share fun and exciting projects through this site.
          I&apos;m passionate about design and leading high-performing teams to
          success.
        </Text>
      </VStack>
    </MotionBox>
  );
};

export default Content;
