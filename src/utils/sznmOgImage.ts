type SznmOgImageOptions = Partial<{
  theme: string;
  fontSize: string;
  images: string;
}>;

export const sznmOgImage = (text: string, options?: SznmOgImageOptions) => {
  const defaultOptions: SznmOgImageOptions = {
    theme: "dark",
    fontSize: "100px",
    images: "https://sznm.dev/avataaars.svg",
  };

  const finalOptions: SznmOgImageOptions = {
    ...defaultOptions,
    ...options,
  };

  return `https://og-image.sznm.dev/**${text}**.png?theme=${finalOptions.theme}&md=1&fontSize=${finalOptions.fontSize}&images=${finalOptions.images}`;
};
