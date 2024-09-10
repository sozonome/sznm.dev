export const unsplashImg = (src: string, width = 1080) => {
  const url = new URL(src);
  url.searchParams.append('width', width.toString());

  return url.href;
};
