import type { Metadata } from 'next';

import { baseUrl } from '~/lib/constants/base-url';
import type { BlogPostProps } from '~/lib/pages/blog/post/types';
import { getPostBySlug } from '~/lib/services/content/post';
import { sznmOgImage } from '~/lib/utils/sznm-og-image';

export const generateMetadata = ({
  params,
}: BlogPostProps): Metadata | undefined => {
  const postData = getPostBySlug(params.id);

  if (!postData) {
    return undefined;
  }

  const pageUrl = `${baseUrl}/blog/${postData.id}`;
  const ogImage = sznmOgImage({
    heading: postData.title,
    text: 'Blog Post | https://sznm.dev',
  });

  return {
    title: postData.title,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${postData.title} | sozonome`,
      images: {
        url: ogImage,
        alt: `${postData.title} og image`,
      },
    },
  };
};
