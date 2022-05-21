import { allBlogs, allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import type { GetStaticProps } from "next";

import type { HomeProps } from "./types";

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allProjectsData = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date ?? ""), new Date(b.date ?? ""))
  );
  const allPostsData = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return {
    props: {
      allProjectsData,
      allPostsData,
    },
  };
};
