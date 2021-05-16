import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import {
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";

import Card from "components/projects/Card";
import BlogPostPreview from "components/blog/BlogPostPreview";

import { getSortedProjectsData } from "helpers/projects";
import { getSortedPostsData } from "helpers/posts";
import { ProjectType } from "models/project";
import { BlogPostType } from "models/blog";
import SocialMeta from "components/SocialMeta";

type HomeProps = {
  allProjectsData: Array<ProjectType>;
  allPostsData: Array<BlogPostType>;
};

const Home = ({ allProjectsData, allPostsData }: HomeProps) => {
  return (
    <Box marginTop={-24}>
      <SocialMeta
        title="sozonome"
        url="https://sznm.dev"
        image="https://og-image.sznm.dev/**sznm**.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250"
      />

      <HeroSection />
      <ProjectsSection data={allProjectsData} />
      <RecentPostSection allPostsData={allPostsData} />
    </Box>
  );
};

const HeroSection = () => {
  return (
    <Box height="90vh" alignItems="center" display="grid">
      <Box
        verticalAlign="center"
        width={["100%", "80%", "60%"]}
        marginTop={[8, 0]}
        alignSelf={["none", "center"]}
      >
        <Heading as="h1" size="xl" paddingBottom={11}>
          Hello! I'm Nathan.
        </Heading>
        <Text fontSize={["md", "xl"]}>
          Digital crafter specializing in Frontend development.
        </Text>
      </Box>
    </Box>
  );
};

const ProjectsSection = ({ data }: { data: Array<ProjectType> }) => {
  const router = useRouter();

  const buttonBackgroundColor = useColorModeValue("gray.100", "gray.600");

  useEffect(() => {
    data
      .filter((project) => project.highlight && project)
      .map(({ id }) => {
        router.prefetch("/projects/[id]", `/projects/${id}`);
      });
  });

  return (
    <Box as="section" marginBottom={16}>
      <Box>
        <Box>
          <Link href="/projects">
            <Heading as="h1" size="xl" cursor="pointer" marginBottom={2}>
              Projects
            </Heading>
          </Link>
          <Text>Some notable projects I've worked on previously.</Text>
        </Box>

        <Grid
          gap={8}
          templateColumns={["repeat(1)", "repeat(1)", "repeat(2, 1fr)"]}
          marginY={8}
        >
          {data
            .filter(
              (unfilteredProject) =>
                unfilteredProject.highlight && unfilteredProject
            )
            .map((project, index) => (
              <Card project={project} key={index} />
            ))}
        </Grid>

        <Link href="/projects" passHref>
          <Button
            width="100%"
            borderRadius={20}
            height={55}
            backgroundColor={buttonBackgroundColor}
            _hover={{
              backgroundColor: "gray.300",
              color: "black",
            }}
            fontFamily="Catamaran, sans-serif"
          >
            see more
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

const RecentPostSection = ({
  allPostsData,
}: {
  allPostsData: Array<BlogPostType>;
}) => {
  const buttonBackgroundColor = useColorModeValue("gray.100", "gray.600");

  return (
    <Box as="section">
      <Heading size="xl" marginBottom={2}>
        Recent Posts
      </Heading>

      <Box marginTop={22}>
        {allPostsData
          .filter((post) => post.published === true)
          .slice(0, 2)
          .map((postData, index) => (
            <BlogPostPreview postData={postData} key={index} />
          ))}
      </Box>

      <Link href="/blog" passHref>
        <Button
          isFullWidth
          width="100%"
          borderRadius={20}
          height={55}
          backgroundColor={buttonBackgroundColor}
          _hover={{
            backgroundColor: "gray.300",
            color: "black",
          }}
          fontFamily="Catamaran, sans-serif"
        >
          see more
        </Button>
      </Link>
    </Box>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allProjectsData: Array<ProjectType> = getSortedProjectsData();
  const allPostsData: Array<BlogPostType> = getSortedPostsData();

  return {
    props: {
      allProjectsData,
      allPostsData,
    },
  };
};

export default Home;
