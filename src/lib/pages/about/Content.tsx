import type { BoxProps } from "@chakra-ui/react";
import { Heading, Link, Text } from "@chakra-ui/react";

import MotionBox from "lib/components/motion/MotionBox";
import { EVENT_TYPE_LINK } from "lib/constants/tracking";
import { trackEvent } from "lib/utils/trackEvent";

const textProps: BoxProps = {
  marginY: 4,
};

const Content = () => {
  const handleClickInstagramLink = () => {
    trackEvent({
      eventName: "About: Click Instagram Link",
      eventData: { type: EVENT_TYPE_LINK },
    });
  };

  return (
    <MotionBox
      variants={{
        before: { opacity: 0, y: 20, transition: { type: "spring" } },
        after: { opacity: 1, y: 0, transition: { type: "spring" } },
      }}
      initial="before"
      animate="after"
    >
      <Heading size="lg">👋 Hi, how are you?</Heading>

      <Text {...textProps}>
        I&apos;m Nathan, currently working as a Frontend Engineer. Most of the
        time I work with React - TypeScript and Flutter - Dart. Sometimes I make
        fun projects and share it here.
      </Text>

      <Text {...textProps}>
        Outside working, I like to travel and{" "}
        <Link
          href="https://instagram.com/agustinusnathaniel"
          isExternal
          onClick={handleClickInstagramLink}
        >
          <Text as="span" fontWeight="extrabold">
            capture moments.
          </Text>
        </Link>
      </Text>
    </MotionBox>
  );
};

export default Content;
