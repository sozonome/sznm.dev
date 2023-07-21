import { allBlogs, allNotes } from 'contentlayer/generated';

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
      name: 'Note',
      id: 'note',
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

const notes: CommandCollection = {
  heading: 'Notes',
  pathPrefix: 'notes',
  type: 'nagivation',
  items: allNotes.map((note) => ({
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
