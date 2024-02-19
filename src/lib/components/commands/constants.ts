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

// const blogPosts: CommandCollection = {
//   heading: 'Blog Posts',
//   pathPrefix: 'blog',
//   type: 'nagivation',
//   items: getAllPosts().map((blogPost) => ({
//     name: blogPost.title,
//     id: blogPost.slug,
//   })),
// };

// const notes: CommandCollection = {
//   heading: 'Notes',
//   pathPrefix: 'notes',
//   type: 'nagivation',
//   items: getAllNotes().map((note) => ({
//     name: note.title,
//     id: note.slug,
//   })),
// };

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
  // blogPosts,
  // notes,
];
