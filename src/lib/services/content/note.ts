import fs from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

import type { Note } from '~/lib/types/note';

const noteDirectory = join(process.cwd(), 'content/notes');

export const getNoteSlugs = () => {
  return fs.readdirSync(noteDirectory);
};

export const getNoteBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(noteDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Note;
};

export const getAllNotes = () => {
  const slugs = getNoteSlugs();
  return slugs
    .map((slug) => getNoteBySlug(slug))
    .sort((note1, note2) => (note1.date > note2.date ? -1 : 1));
};
