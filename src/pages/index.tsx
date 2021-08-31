import {
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import BlogPostPreview from "components/blog/BlogPostPreview";
import Card from "components/projects/Card";
import { getSortedPostsData } from "helpers/posts";
import { getSortedProjectsData } from "helpers/projects";
import { BlogPostType } from "models/blog";
import { ProjectType } from "models/project";

type HomeProps = {
  allProjectsData: Array<ProjectType>;
  allPostsData: Array<BlogPostType>;
};

const Home = ({ allProjectsData, allPostsData }: HomeProps) => {
  return (
    <Box marginTop={-24}>
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
          {"Hello! I'm Nathan."}
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

  const buttonBackgroundColor = useColorModeValue("gray.100", "gray.700");

  useEffect(() => {
    data
      .filter((project) => project.highlight && project)
      .forEach(({ id }) => {
        router.prefetch("/projects/[id]", `/projects/${id}`);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Box as="section" marginBottom={16}>
      <Box>
        <Box>
          <Link href="/projects" passHref>
            <Heading as="h1" size="xl" cursor="pointer" marginBottom={2}>
              Projects
            </Heading>
          </Link>
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
  const buttonBackgroundColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box as="section">
      <Heading size="xl" marginBottom={2}>
        Recent Posts
      </Heading>

      <Grid marginY={12} gap={16}>
        {allPostsData
          .filter((post) => post.published === true)
          .slice(0, 2)
          .map((postData, index) => (
            <BlogPostPreview postData={postData} key={index} />
          ))}
      </Grid>

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
