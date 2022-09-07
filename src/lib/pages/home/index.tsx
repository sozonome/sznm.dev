import { Box } from "@chakra-ui/react";

import HeroSection from "./HeroSection";
import PostsSection from "./PostsSection";
import ProjectsSection from "./ProjectsSection";
import type { HomeProps } from "./types";

const Home = ({ highlightedProjects, recentPosts }: HomeProps) => {
  return (
    <Box marginTop={-24}>
      <HeroSection />
      <ProjectsSection data={highlightedProjects} />
      <PostsSection data={recentPosts} />
    </Box>
  );
};

export default Home;
