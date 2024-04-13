import { Stack } from '@chakra-ui/react';

import { highlightedProjects } from '~/lib/constants/project';
import { getAllPosts } from '~/lib/services/content/post';

import HeroSection from './HeroSection';
import PostsSection from './PostsSection';
import ProjectsSection from './ProjectsSection';

const recentPosts = getAllPosts().slice(0, 2);

const Home = () => {
  return (
    <Stack direction="column" spacing={16}>
      <HeroSection />
      <ProjectsSection data={highlightedProjects} />
      <PostsSection data={recentPosts} />
    </Stack>
  );
};

export default Home;
