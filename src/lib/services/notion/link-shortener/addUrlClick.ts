import { updatePage } from "lib/services/notion/common/page";

import type { ShortenedUrlEntry } from "./types";

export const addUrlClick = (urlEntry: ShortenedUrlEntry) =>
  updatePage(urlEntry.id, { clicks: { number: urlEntry.clicks + 1 } });
