import type { NextApiRequest, NextApiResponse } from "next";

import { addUrlClick } from "lib/services/notion/link-shortener/addUrlClick";
import type { ShortenedUrlEntry } from "lib/services/notion/link-shortener/types";

const addClick = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(400);
  }

  const entry = req.body as ShortenedUrlEntry;
  await addUrlClick(entry);
  return res.status(200);
};

export default addClick;
