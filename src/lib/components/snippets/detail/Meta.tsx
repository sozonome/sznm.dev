import type { Snippet } from "contentlayer/generated";
import { NextSeo } from "next-seo";

import { baseUrl } from "lib/constants/baseUrl";
import { sznmOgImage } from "lib/utils/sznmOgImage";

type SnippetDetailMetaProps = {
  data: Snippet;
};

const SnippetDetailMeta = ({ data }: SnippetDetailMetaProps) => {
  const ogImage = sznmOgImage({
    heading: data.title,
    text: "Snippets | https://sznm.dev",
  });
  const pageUrl = `${baseUrl}/snippets/${data.id}`;

  return (
    <NextSeo
      title={data.title}
      canonical={pageUrl}
      openGraph={{
        title: `sozonome | ${data.title}`,
        images: [
          {
            url: ogImage,
            alt: `${data.title} og-image`,
          },
        ],
      }}
    />
  );
};

export default SnippetDetailMeta;
