import { sortedBlogPosts } from '~/lib/constants/blog';
import { sortedNotes } from '~/lib/constants/note';

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
      name: 'Notes',
      id: 'notes',
    },
    {
      name: 'T.I.L. (Today I Learned)',
      id: 'til',
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
  items: sortedBlogPosts.map((blogPost) => ({
    name: blogPost.title,
    id: blogPost.id,
  })),
};

const notes: CommandCollection = {
  heading: 'Notes',
  pathPrefix: 'notes',
  type: 'nagivation',
  items: sortedNotes.map((note) => ({
    name: note.title,
    id: note.id,
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
  notes,
];
