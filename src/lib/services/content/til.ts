import { allTodayILearns } from 'content-collections';

const allPublishedTils = allTodayILearns.filter((item) => item.published);

export const getAllTils = () =>
  allPublishedTils.sort((til1, til2) => (til1.date > til2.date ? -1 : 1));
