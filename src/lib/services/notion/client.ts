import { Client } from "@notionhq/client";

import { NOTION_TOKEN } from "./constants";

export const notion = new Client({
  auth: NOTION_TOKEN,
});
