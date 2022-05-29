import type { DefaultSeoProps } from "next-seo";

// https://github.com/garmeeh/next-seo#nextseo-options
export const defaultSEOConfig: DefaultSeoProps = {
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
        url: "https://og.sznm.dev/api/generate?heading=sozonome&text=https://sznm.dev",
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
