import { type Post, allPosts } from 'content-collections';

const allPublishedPosts = allPosts.filter((item) => !!item.published);

export const getPostBySlug = (slug: string) =>
  allPosts.find((item) => item.id === slug) as Post;

export const getAllPosts = () =>
  allPublishedPosts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
