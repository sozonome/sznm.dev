import { allBlogs, allSnippets } from "contentlayer/generated";

import type { CommandGroup } from "./types";
import { CommandType } from "./types";

const navigationMenus: CommandGroup = {
  heading: "Main Navigation",
  type: CommandType.navigation,
  items: [
    {
      name: "Home",
      id: "",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Other Projects",
      id: "projects/other",
    },
    {
      name: "Blog",
      id: "blog",
    },
    {
      name: "About",
      id: "about",
    },
  ],
};

const blogPosts: CommandGroup = {
  heading: "Blog Posts",
  pathPrefix: "blog",
  type: CommandType.navigation,
  items: allBlogs.map((blogPost) => ({
    name: blogPost.title,
    id: blogPost.id,
  })),
};

const snippets: CommandGroup = {
  heading: "Snippets",
  pathPrefix: "snippets",
  type: CommandType.navigation,
  items: allSnippets.map((snippet) => ({
    name: snippet.title,
    id: snippet.id,
  })),
};

const themeCommand: CommandGroup = {
  heading: "System",
  type: CommandType.theme,
  items: [
    {
      name: "Toggle Theme",
      id: "",
    },
  ],
};

export const commands: Array<CommandGroup> = [
  themeCommand,
  navigationMenus,
  blogPosts,
  snippets,
];
