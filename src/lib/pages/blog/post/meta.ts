import type { Metadata } from 'next';

import { baseUrl } from '~/lib/constants/baseUrl';
import { sortedBlogPosts } from '~/lib/constants/blog';
import type { BlogPostProps } from '~/lib/pages/blog/post/types';
import { sznmOgImage } from '~/lib/utils/sznmOgImage';

export const generateMetadata = ({
  params,
}: BlogPostProps): Metadata | undefined => {
  const postData = sortedBlogPosts.find(({ id }) => id === params.id);

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
