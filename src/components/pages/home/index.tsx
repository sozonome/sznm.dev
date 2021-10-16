import { Box } from "@chakra-ui/react";

import { BlogPostType } from "models/blog";
import { ProjectType } from "models/project";

import HeroSection from "./HeroSection";
import PostsSection from "./PostsSection";
import ProjectsSection from "./ProjectsSection";

export type HomeProps = {
  allProjectsData: Array<ProjectType>;
  allPostsData: Array<BlogPostType>;
};

const Home = ({ allProjectsData, allPostsData }: HomeProps) => {
  return (
    <Box marginTop={-24}>
      <HeroSection />
      <ProjectsSection data={allProjectsData} />
      <PostsSection data={allPostsData} />
    </Box>
  );
};

export default Home;
