/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Agustinus Nathaniel - Digital Crafter",
  titleTemplate: "%s | sozonome",
  defaultTitle: "sozonome | Agustinus Nathaniel - Digital Crafter",
  description: "Agustinus Nathaniel's Dev Site | sozonome",
  canonical: "https://sznm.dev",
  openGraph: {
    url: "https://sznm.dev",
    title: "sozonome | Digital Crafter",
    description: "Agustinus Nathaniel's Dev Site",
    images: [
      {
        url: "https://og-image.sznm.dev/**sznm**.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "sznm.dev og-image",
      },
    ],
    site_name: "sozonome",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
