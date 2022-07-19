import type { NextApiRequest, NextApiResponse } from "next";

import { getUrl } from "lib/services/notion/link-shortener/getUrl";

const getLongUrl = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Unallowed Method" });
  }
  const { slug } = req.query;
  if (!slug) {
    return res.status(400).json({ message: "Bad Request" });
  }

  const entry = await getUrl(slug as string);
  if (entry.url) {
    res.setHeader(
      "Cache-Control",
      "s-maxage=60, stale-while-revalidate=2678400"
    );
    return res.status(200).json(entry);
  }
  return res.status(400).json({ message: "Bad Request" });
};

export default getLongUrl;
