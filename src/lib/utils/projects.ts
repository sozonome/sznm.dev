import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export const getSortedProjectsData = () => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDirectory);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allProjectsData: any = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return allProjectsData.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
};

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getProjectData(id: string) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    ...matterResult.data,
    id,
    contentHtml,
  };
}
