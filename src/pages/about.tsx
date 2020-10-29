import { Heading, Text, Link, Box, BoxProps } from "@chakra-ui/core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

import AccessibleLink from "../components/AccessibleLink";
import MotionBox from "../components/motion/MotionBox";
import MotionFlex from "../components/motion/MotionFlex";

const About = () => {
  return (
    <Box>
      <Head>
        <title>About | sozonome</title>
      </Head>
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
          <Text as="span" fontWeight={500}>
            capture moments.
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

  const staggerAnimationProps = {
    variants: {
      before: {},
      after: { transition: { staggerChildren: 0.06 } },
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

  const MotionLinks = (props: { link: string; icon: IconProp }) => {
    const { link, icon } = props;
    return (
      <MotionBox {...childAnimationProps}>
        <Link href={link} marginRight={11} isExternal>
          <FontAwesomeIcon icon={icon} />
        </Link>
      </MotionBox>
    );
  };

  return (
    <MotionBox marginY={4} {...wrapperAnimationProps}>
      <Text fontStyle="italic">1.01 ^365 = 37.7</Text>
      <MotionFlex fontSize="4xl" {...staggerAnimationProps}>
        <MotionLinks
          link={`https://github.com/sozonome`}
          icon={["fab", "github"]}
        />
        <MotionLinks
          link={`https://twitter.com/sozonome`}
          icon={["fab", "twitter"]}
        />
        <MotionLinks
          link={`https://www.instagram.com/sozonome`}
          icon={["fab", "instagram"]}
        />
        <MotionLinks
          link={`https://youtube.com/channel/UCJnYMGIHtQ8yInuq4Pc2Ttg`}
          icon={["fab", "youtube"]}
        />
        <MotionLinks link={`https://dev.to/sozonome`} icon={["fab", "dev"]} />
        <MotionLinks
          link={`https://medium.com/@agustinusnathaniel`}
          icon={["fab", "medium"]}
        />
        <MotionLinks
          link={`mailto:hello@sznm.dev?cc=agustinusnathaniel228@gmail.com`}
          icon={faEnvelope}
        />
      </MotionFlex>
    </MotionBox>
  );
};

export default About;
