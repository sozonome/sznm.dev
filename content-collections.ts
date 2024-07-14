import { defineCollection, defineConfig } from '@content-collections/core';
import readingTime from 'reading-time';

const projects = defineCollection({
  name: 'projects',
  directory: 'content/projects',
  include: '**/*.md',
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    published: z.boolean().catch(true),
    /** will be shown at home */
    highlight: z.boolean().optional(),
    /** shown at project list frontpage */
    featured: z.boolean().optional(),
    sznmApps: z.boolean().optional(),
    stacks: z.array(z.string()).optional(),
    date: z.string(),
    projectLink: z.string().optional(),
    repoLink: z.string().optional(),
    appStoreLink: z.string().optional(),
    playStoreLink: z.string().optional(),
    icon: z.string().optional(),
    thumbnail: z.string().optional(),
    thumbnailDark: z.string().optional(),
    projectType: z.string().optional(),
    id: z.string().optional(),
  }),
  transform: (doc) => ({
    ...doc,
    id: doc._meta.fileName.replace(/\.md$|\.mdx$/, ''),
  }),
});

const posts = defineCollection({
  name: 'posts',
  directory: 'content/posts',
  include: '**/*.md',
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
    cover: z.string(),
    thumbnail: z.string().optional(),
    description: z.string().optional(),
    legacyID: z.string().optional(),
    published: z.boolean().catch(true),
    tags: z.array(z.string()),
    readTime: z
      .object({
        text: z.string(),
        minutes: z.string(),
        time: z.string(),
        words: z.string(),
      })
      .optional(),
    cover_image: z.string().optional(),
    id: z.string().optional(),
  }),
  transform: (doc) => ({
    ...doc,
    readTime: Object(readingTime(doc.content)),
    id: doc._meta.fileName.replace(/\.md$|\.mdx$/, ''),
  }),
});

type NoteCollectionDefinitionParams = {
  name: string;
  directory: string;
};

const noteCollectionDefinition = ({
  name,
  directory,
}: NoteCollectionDefinitionParams) =>
  defineCollection({
    name,
    directory,
    include: '**/*.md',
    schema: (z) => ({
      title: z.string(),
      description: z.string(),
      published: z.boolean().catch(true),
      date: z.string(),
      tags: z.array(z.string()),
      id: z.string().optional(),
    }),
    transform: (doc) => ({
      ...doc,
      id: doc._meta.fileName.replace(/\.md$|\.mdx$/, ''),
    }),
  });

const notes = noteCollectionDefinition({
  name: 'notes',
  directory: 'content/notes',
});

const todayILearns = noteCollectionDefinition({
  name: 'todayILearns',
  directory: 'content/til',
});

const testimonies = defineCollection({
  name: 'testimonies',
  directory: 'content/testimonies',
  include: '**/*.md',
  schema: (z) => ({
    name: z.string(),
    title: z.string(),
    year: z.string(),
    linkedin: z.string().optional(),
    id: z.string().optional(),
  }),
  transform: (doc) => ({
    ...doc,
    id: doc._meta.fileName.replace(/\.md$|\.mdx$/, ''),
  }),
});

export default defineConfig({
  collections: [projects, posts, notes, todayILearns, testimonies],
});
