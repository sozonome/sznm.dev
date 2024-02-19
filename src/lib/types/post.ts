import type { ReadTimeResults } from 'reading-time';

export type Post = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  cover: string;
  thumbnail: string;
  published: boolean;
  tags: Array<string>;
  content: string;
  readTime: ReadTimeResults;
};
