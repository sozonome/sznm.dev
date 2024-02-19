export type Project = {
  slug: string;
  title: string;
  description: string;
  published?: boolean;
  /** will be shown at home */
  highlight?: boolean;
  /** shown at project list frontpage */
  featured?: boolean;
  sznmApps?: boolean;
  stacks: Array<string>;
  date: string;
  projectLink?: string;
  repoLink?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  icon?: string;
  thumbnail?: string;
  thumbnailDark?: string;
  projectType?: string;
  content: string;
};
