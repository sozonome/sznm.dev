export type Note = {
  slug: string;
  title: string;
  description: string;
  published: boolean;
  date: string;
  tags: Array<string>;
  content: string;
};
