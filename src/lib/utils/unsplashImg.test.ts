import { describe, expect, test } from "vitest";

import { unsplashImg } from "./unsplashImg";

describe("[utils] unsplashImg", () => {
  const src = "https://images.unsplash.com/photo-1579347380110-d27a8be59b32";

  test("WHEN unsplashImg with img link, THEN should return link with extended width query param", () => {
    const link = unsplashImg(src);

    expect(link).toContain("width");
  });

  test("WHEN unsplashImg with img link and width, THEN should return link with extended width query param and defined width", () => {
    const width = 400;
    const link = unsplashImg(src, width);

    expect(link).toContain(`width=${width}`);
  });
});
