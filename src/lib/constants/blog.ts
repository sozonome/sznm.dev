import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const sortedBlogPosts = allBlogs
  .filter((project) => project.published !== false)
  .sort((a, b) => compareDesc(new Date(a.date ?? ""), new Date(b.date ?? "")));

export const blogPostIdParams = sortedBlogPosts.map((post) => ({
  params: {
    id: post.id,
  },
}));
