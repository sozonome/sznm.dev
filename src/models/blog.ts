export type BlogPostType = {
  id: string;
  title: string;
  date: string;
  slug: string;
  path: string;
  published: boolean;
  type: string;
  contentHtml: any;
  thumbnail?: string;
};
