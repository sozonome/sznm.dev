import { notion } from "lib/services/notion/client";
import type {
  GetDatabaseOptionalArgs,
  NotionDatabaseEntries,
} from "lib/services/notion/common/database/types";

export const getDatabase = async (
  databaseId: string,
  query?: GetDatabaseOptionalArgs
) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: query?.filter,
  });

  return response.results as NotionDatabaseEntries;
};
