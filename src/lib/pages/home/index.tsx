import HeroSection from "./HeroSection";
import PostsSection from "./PostsSection";
import ProjectsSection from "./ProjectsSection";
import type { HomeProps } from "./types";

const Home = ({ highlightedProjects, recentPosts }: HomeProps) => {
  return (
    <div className="-mt-24">
      <HeroSection />
      <ProjectsSection data={highlightedProjects} />
      <PostsSection data={recentPosts} />
    </div>
  );
};

export default Home;
