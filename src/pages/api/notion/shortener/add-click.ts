import type { NextApiRequest, NextApiResponse } from "next";

import { addUrlClick } from "lib/services/notion/link-shortener/addUrlClick";
import type { ShortenedUrlEntry } from "lib/services/notion/link-shortener/types";

const addClick = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Unallowed Method" });
  }
  if (!req.body) {
    return res.status(400).json({ message: "Bad Request" });
  }

  const entry = req.body as ShortenedUrlEntry;
  await addUrlClick(entry);
  return res.status(200).send("OK");
};

export default addClick;
