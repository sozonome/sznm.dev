import type { UpdatePageParameters } from "@notionhq/client/build/src/api-endpoints";

import { notion } from "lib/services/notion/client";

export const updatePage = (
  pageId: string,
  properties: UpdatePageParameters["properties"]
) => notion.pages.update({ page_id: pageId, properties });
