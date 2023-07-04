import { compareDesc } from 'date-fns';

import { allBlogs } from 'contentlayer/generated';

export const sortedBlogPosts = allBlogs
  .filter((project) => project.published !== false)
  .sort((a, b) => compareDesc(new Date(a.date ?? ''), new Date(b.date ?? '')));

export const blogPostIdParams = sortedBlogPosts.map((post) => ({
  id: post.id,
}));
