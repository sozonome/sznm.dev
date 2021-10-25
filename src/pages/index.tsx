import { GetStaticProps } from "next";

import Home, { HomeProps } from "components/pages/home";
import { BlogPostType } from "models/blog";
import { ProjectType } from "models/project";
import { getSortedPostsData } from "utils/posts";
import { getSortedProjectsData } from "utils/projects";

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
