import { ArticleJsonLd } from 'next-seo';

import { baseUrl } from '~/lib/constants/baseUrl';
import type { Post } from '~/lib/types/post';

type BlogPostMetaProps = {
  postData: Post;
};

const BlogPostMeta = ({ postData }: BlogPostMetaProps) => {
  return (
    <ArticleJsonLd
      useAppDir
      type="Blog"
      url={`${baseUrl}/blog/${postData.slug}`}
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
