import type {
  PropertyValueNumber,
  PropertyValueUrl,
} from "@notion-stuff/v4-types";

import { getDatabase } from "lib/services/notion/common/database";
import { NOTION_LINK_SHORTENER_DATABASE_ID } from "lib/services/notion/constants";

export const getUrl = async (slug: string) => {
  const result = await getDatabase(NOTION_LINK_SHORTENER_DATABASE_ID, {
    filter: {
      property: "slug",
      rich_text: { equals: slug },
    },
  });
  const entry = result[0];
  return {
    id: entry?.id,
    url: (entry?.properties.url as PropertyValueUrl)?.url,
    count: (entry.properties.count as PropertyValueNumber)?.number,
  };
};
