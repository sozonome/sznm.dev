import { type Note, allNotes } from 'content-collections';

const allPublishedNotes = allNotes.filter((item) => !!item.published);

export const getNoteBySlug = (slug: string) =>
  allNotes.find((item) => item.id === slug) as Note;

export const getAllNotes = () =>
  allPublishedNotes.sort((note1, note2) => (note1.date > note2.date ? -1 : 1));
