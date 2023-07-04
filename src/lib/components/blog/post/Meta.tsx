import { ArticleJsonLd } from 'next-seo';

import type { Blog } from 'contentlayer/generated';
import { baseUrl } from '~/lib/constants/baseUrl';

type BlogPostMetaProps = {
  postData: Blog;
};

const BlogPostMeta = ({ postData }: BlogPostMetaProps) => {
  return (
    <ArticleJsonLd
      useAppDir
      type="Blog"
      url={`${baseUrl}/blog/${postData.id}`}
      title={`${postData.title} | sozonome`}
      images={[]}
      datePublished={new Date(postData.date).toISOString()}
      dateModified={new Date(postData.date).toISOString()}
      authorName="Agustinus Nathaniel"
      description={`A blog post by Agustinus Nathaniel explaining about ${postData.title}`}
    />
  );
};

export default BlogPostMeta;
