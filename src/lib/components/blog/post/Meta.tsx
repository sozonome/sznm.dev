import type { Blog } from "contentlayer/generated";
import { ArticleJsonLd, NextSeo } from "next-seo";

import { baseUrl } from "lib/constants/baseUrl";
import { sznmOgImage } from "lib/utils/sznmOgImage";

type BlogPostMetaProps = {
  postData: Blog;
};

const BlogPostMeta = ({ postData }: BlogPostMetaProps) => {
  const ogImage = sznmOgImage({
    heading: postData.title,
    text: "Blog Post | https://sznm.dev",
  });
  const pageUrl = `${baseUrl}/blog/${postData.id}`;

  return (
    <>
      <NextSeo
        title={postData.title}
        canonical={pageUrl}
        openGraph={{
          title: `${postData.title} | sozonome`,
          url: pageUrl,
          images: [
            {
              url: ogImage,
              alt: `${postData.title} og-image`,
            },
          ],
        }}
      />

      <ArticleJsonLd
        type="Blog"
        url={`${baseUrl}/blog/${postData.id}`}
        title={`${postData.title} | sozonome`}
        images={[]}
        datePublished={new Date(postData.date).toISOString()}
        dateModified={new Date(postData.date).toISOString()}
        authorName="Agustinus Nathaniel"
        description={`A blog post by Agustinus Nathaniel explaining about ${postData.title}`}
      />
    </>
  );
};

export default BlogPostMeta;
