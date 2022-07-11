import type { NextApiRequest, NextApiResponse } from "next";

import { addUrlClick } from "lib/services/notion/link-shortener/addUrlClick";
import { getUrl } from "lib/services/notion/link-shortener/getUrl";
import type { ShortenedUrlEntry } from "lib/services/notion/link-shortener/types";

const addClick = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Unallowed Method" });
  }
  if (!(req.body && req.body.slug)) {
    return res.status(400).json({ message: "Bad Request" });
  }

  const entry = await getUrl(req.body.slug);
  if (entry.id) {
    await addUrlClick(entry as ShortenedUrlEntry);
    return res.status(200).send("OK");
  }

  return res.status(400).json({ message: "Bad Request" });
};

export default addClick;
