import { Box } from "@chakra-ui/react";

import HeroSection from "./HeroSection";
import PostsSection from "./PostsSection";
import ProjectsSection from "./ProjectsSection";
import type { HomeProps } from "./types";

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
