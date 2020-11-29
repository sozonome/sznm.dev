import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Heading, Text, Button, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

import Card from "../components/Card";
import MotionFlex from "../components/motion/MotionFlex";

import { getSortedProjectsData } from "../helpers/projects";

const Home = ({ allProjectsData }) => {
  return (
    <>
      <HeroSection />
      <ProjectsSection data={allProjectsData} />
    </>
  );
};

const HeroSection = () => {
  return (
    <MotionFlex
      marginY={"2.75rem"}
      as="section"
      variants={{
        before: { opacity: 0, y: 20, transition: { type: "spring" } },
        after: { opacity: 1, y: 0, transition: { type: "spring" } },
      }}
      initial="before"
      animate="after"
    >
      <Box boxSize={[100, 160]}>
        <Image
          width={160}
          height={160}
          className="glow"
          src="/avataaars.svg"
          alt="sozonome"
        />
      </Box>

      <Box
        verticalAlign="center"
        width={["100%", "80%", "60%"]}
        paddingX={22}
        alignSelf={["none", "center"]}
      >
        <Heading as="h1" size="xl" paddingBottom={11}>
          Hello! I'm Nathan,
        </Heading>
        <Text fontSize="xl">
          Digital crafter specializing in Frontend and Mobile development.
        </Text>
      </Box>
    </MotionFlex>
  );
};

const ProjectsSection = ({ data }) => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  useEffect(() => {
    data
      .filter((project) => project.highlight && project)
      .map(({ id }) => {
        router.prefetch("/projects/[id]", `/projects/${id}`);
      });
  });

  return (
    <Box as="section" paddingY={22}>
      <Box>
        <Box>
          <Link href="/projects">
            <Heading as="h1" size="xl" cursor="pointer" marginBottom={2}>
              Projects
            </Heading>
          </Link>
          <Text>Some notable projects I've worked on previously.</Text>
        </Box>

        <MotionFlex
          wrap="wrap"
          marginTop={22}
          variants={{
            before: {},
            after: { transition: { staggerChildren: 0.06 } },
          }}
          initial="before"
          animate="after"
        >
          {data
            .filter((project) => project.highlight && project)
            .map(({ id, title, thumbnail }, index) => {
              return (
                <Card
                  title={title}
                  handleClick={() =>
                    router.push("/projects/[id]", `/projects/${id}`)
                  }
                  img={thumbnail}
                  key={index}
                />
              );
            })}
        </MotionFlex>

        <Link href="/projects">
          <Button
            width="100%"
            borderRadius={20}
            height={55}
            backgroundColor={colorMode === "light" ? "gray.100" : "gray.700"}
            _hover={{
              backgroundColor: "gray.300",
              color: "black",
            }}
            fontFamily="Rubik, sans-serif"
          >
            see more
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export const getStaticProps = async () => {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
};

export default Home;
