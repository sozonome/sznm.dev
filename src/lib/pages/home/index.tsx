import { Box } from '@chakra-ui/react';

import { sortedBlogPosts } from '~/lib/constants/blog';
import { highlightedProjects } from '~/lib/constants/project';

import HeroSection from './HeroSection';
import PostsSection from './PostsSection';
import ProjectsSection from './ProjectsSection';

const recentPosts = sortedBlogPosts.slice(0, 2);

const Home = () => {
  return (
    <Box marginTop={-24}>
      <HeroSection />
      <ProjectsSection data={highlightedProjects} />
      <PostsSection data={recentPosts} />
    </Box>
  );
};

export default Home;
