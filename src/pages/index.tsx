import { GetStaticProps } from "next";

import Home, { HomeProps } from "components/pages/home";
import { getSortedPostsData } from "helpers/posts";
import { getSortedProjectsData } from "helpers/projects";
import { BlogPostType } from "models/blog";
import { ProjectType } from "models/project";

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
