import type {
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type NotionDatabaseEntries = Array<
  Extract<QueryDatabaseResponse["results"][number], { url: string }>
>;

export type GetDatabaseOptionalArgs = {
  filter?: QueryDatabaseParameters["filter"];
};
