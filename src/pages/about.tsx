import { Heading, Text, Link, Box, BoxProps } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { IconBaseProps } from "react-icons";
import {
  FaDev,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaProductHunt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

import MotionBox from "components/motion/MotionBox";
import MotionFlex from "components/motion/MotionFlex";

const About = () => {
  return (
    <Box>
      <NextSeo
        title="About"
        openGraph={{
          title: "About | sozonome",
          description: "About sznm.dev page",
        }}
      />
      <HeadSection />
      <AboutContent />
      <Links />
    </Box>
  );
};

const HeadSection = () => {
  return (
    <Box marginBottom={16}>
      <Heading size="2xl">sozonome</Heading>
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
      <Heading size="lg">👋 Hi, how are you?</Heading>
      <Text {...textProps}>
        {`I'm Nathan, currently working as a Frontend Engineer. Most of the time I
        work with TypeScript and React. I make fun projects in my free time and
        share it here. Whether to explore more around React and its frameworks
        (Gatsby, Next.js), Ionic, trying out Svelte and Vue, or other
        technologies.`}
      </Text>
      <Text {...textProps}>
        I like exploring useful and fun tech products (surfing around
        ProductHunt), traveling, and{" "}
        <Link href="https://instagram.com/agustinusnathaniel" isExternal>
          <Text as="span" fontWeight={500}>
            capture moments.
          </Text>
        </Link>
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

  const MotionLinks = (props: { link: string; icon: IconType }) => {
    const { link, icon } = props;
    const iconProps: IconBaseProps = { style: { height: "100%" } };
    return (
      <MotionBox {...childAnimationProps}>
        <Link href={link} isExternal>
          {icon(iconProps)}
        </Link>
      </MotionBox>
    );
  };

  return (
    <MotionBox marginY={4} {...wrapperAnimationProps}>
      <Text fontStyle="italic">1.01 ^365 = 37.7</Text>
      <MotionFlex
        wrap="wrap"
        fontSize="4xl"
        gridGap={1}
        {...staggerAnimationProps}
      >
        <MotionLinks link={`https://github.com/sozonome`} icon={FaGithub} />
        <MotionLinks
          link={`https://linkedin.com/in/agustinusnathaniel`}
          icon={FaLinkedin}
        />
        <MotionLinks link={`https://twitter.com/sozonome`} icon={FaTwitter} />
        <MotionLinks
          link={`https://www.instagram.com/sozonome`}
          icon={FaInstagram}
        />
        <MotionLinks
          link={`https://youtube.com/channel/UCJnYMGIHtQ8yInuq4Pc2Ttg`}
          icon={FaYoutube}
        />
        <MotionLinks link={`https://dev.to/sozonome`} icon={FaDev} />
        <MotionLinks
          link={`https://medium.com/@agustinusnathaniel`}
          icon={FaMedium}
        />
        <MotionLinks
          link={`https://www.producthunt.com/@sozonome/made`}
          icon={FaProductHunt}
        />
        <MotionLinks
          link={`mailto:hello@sznm.dev?cc=agustinusnathaniel228@gmail.com`}
          icon={FaEnvelope}
        />
      </MotionFlex>
    </MotionBox>
  );
};

export default About;
