import fs from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

import type { Post } from '~/lib/types/post';

const postDirectory = join(process.cwd(), 'content/posts');

export const getPostSlugs = () => {
  return fs.readdirSync(postDirectory);
};

export const getPostBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const readTime = readingTime(content);

  return { ...data, readTime, slug: realSlug, content } as Post;
};

export const getAllPosts = () => {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
};
