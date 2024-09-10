export const convertToId = (heading: string) =>
  heading?.split(' ').join('-').toLowerCase();

export const convertToIdLink = (currentPath: string, heading: string) =>
  `${currentPath.split('#')[0]}#${convertToId(heading)}`;
