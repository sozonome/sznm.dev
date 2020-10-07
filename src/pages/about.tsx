import { Heading, Text, Flex, Link, Box, BoxProps } from "@chakra-ui/core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AccessibleLink from "../components/AccessibleLink";
import MotionBox from "../components/motion/MotionBox";
import MotionFlex from "../components/motion/MotionFlex";

const About = () => {
  return (
    <Box>
      <HeadSection />
      <AboutContent />
      <Links />
    </Box>
  );
};

const HeadSection = () => {
  return (
    <Box marginBottom={8}>
      <Heading>sozonome</Heading>
    </Box>
  );
};

const AboutContent = () => {
  const textProps: BoxProps = {
    marginY: 4,
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
      <Heading>👋 Hi, how are you?</Heading>
      <Text {...textProps}>
        I'm currently working as a Frontend Engineer. Most of the time I work
        with TypeScript and React. I make fun projects in my free time and share
        it here. Whether to explore more around React and its frameworks
        (Gatsby, Next.js), Ionic, or trying out Svelte and Vue.
      </Text>
      <Text {...textProps}>
        I like exploring useful and fun tech products (surfing around
        ProductHunt), traveling, and{" "}
        <AccessibleLink
          href="https://instagram.com/agustinusnathaniel"
          isExternal
        >
          <Text
            as="span"
            fontStyle="italic"
            textDecoration="underline"
            fontWeight={500}
          >
            doing some visual arts (graphic design, videography, photography).
          </Text>
        </AccessibleLink>
      </Text>
    </MotionBox>
  );
};

const Links = () => {
  const wrapperAnimationProps = {
    variants: {
      before: { y: 0, opacity: 0, transition: { type: "spring" } },
      after: { y: 20, opacity: 1, transition: { type: "spring" } },
    },
    initial: "before",
    animate: "after",
  };

  const childAnimationProps = {
    variants: {
      before: {
        opacity: 0,
        y: 20,
        transition: {
          type: "spring",
          damping: 16,
          stiffness: 200,
        },
      },
      after: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 16,
          stiffness: 200,
        },
      },
    },
  };

  return (
    <MotionBox marginY={4} {...wrapperAnimationProps}>
      <Text fontStyle="italic">1.01 ^365 = 37.7</Text>
      <MotionFlex
        fontSize="4xl"
        variants={{
          before: {},
          after: { transition: { staggerChildren: 0.06 } },
        }}
        initial="before"
        animate="after"
      >
        <MotionBox {...childAnimationProps}>
          <Link
            href={`https://github.com/sozonome`}
            marginRight={11}
            isExternal
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </Link>
        </MotionBox>
        <MotionBox {...childAnimationProps}>
          <Link
            href={`https://twitter.com/sozonome`}
            marginRight={11}
            isExternal
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </Link>
        </MotionBox>
        <MotionBox {...childAnimationProps}>
          <Link
            href={`https://www.instagram.com/sozonome`}
            marginRight={11}
            isExternal
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </Link>
        </MotionBox>
        <MotionBox {...childAnimationProps}>
          <Link
            href={`https://youtube.com/channel/UCJnYMGIHtQ8yInuq4Pc2Ttg`}
            marginRight={11}
            isExternal
          >
            <FontAwesomeIcon icon={["fab", "youtube"]} />
          </Link>
        </MotionBox>
        <MotionBox {...childAnimationProps}>
          <Link href={`mailto:hello@sznm.dev`} isExternal>
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </MotionBox>
      </MotionFlex>
    </MotionBox>
  );
};

export default About;
