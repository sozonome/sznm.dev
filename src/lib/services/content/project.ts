import fs from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

import type { Project } from '~/lib/types/project';

const projectDirectory = join(process.cwd(), 'content/projects');

export const getProjectSlugs = () => {
  return fs.readdirSync(projectDirectory);
};

export const getProjectBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(projectDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Project;
};

export const getAllProjects = () => {
  const slugs = getProjectSlugs();
  return slugs
    .map((slug) => getProjectBySlug(slug))
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1));
};
