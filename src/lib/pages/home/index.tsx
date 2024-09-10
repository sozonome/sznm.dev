import { Stack } from '@chakra-ui/react';

import { highlightedProjects } from '~/lib/constants/project';
import { getAllPosts } from '~/lib/services/content/post';

import { HeroSection } from './components/hero-section';
import { PostsSection } from './components/posts-section';
import { ProjectsSection } from './components/project-section';

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
