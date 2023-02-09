import { allBlogs, allSnippets } from 'contentlayer/generated';

import type { CommandCollection } from './types';

const navigationMenus: CommandCollection = {
  heading: 'Main Navigation',
  type: 'nagivation',
  items: [
    {
      name: 'Home',
      id: '',
    },
    {
      name: 'Projects',
      id: 'projects',
    },
    {
      name: 'Other Projects',
      id: 'projects/other',
    },
    {
      name: 'Blog',
      id: 'blog',
    },
    {
      name: 'Snippets',
      id: 'snippets',
    },
    {
      name: 'About',
      id: 'about',
    },
  ],
};

const blogPosts: CommandCollection = {
  heading: 'Blog Posts',
  pathPrefix: 'blog',
  type: 'nagivation',
  items: allBlogs.map((blogPost) => ({
    name: blogPost.title,
    id: blogPost.id,
  })),
};

const snippets: CommandCollection = {
  heading: 'Snippets',
  pathPrefix: 'snippets',
  type: 'nagivation',
  items: allSnippets.map((snippet) => ({
    name: snippet.title,
    id: snippet.id,
  })),
};

const themeCommand: CommandCollection = {
  heading: 'System',
  type: 'theme',
  items: [
    {
      name: 'Toggle Theme',
      id: '',
    },
  ],
};

export const commands: Array<CommandCollection> = [
  themeCommand,
  navigationMenus,
  blogPosts,
  snippets,
];
