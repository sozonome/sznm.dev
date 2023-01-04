import type { Blog } from "contentlayer/generated";
import Link from "next/link";
import * as React from "react";

import BlogPostPreview from "lib/components/blog/BlogPostPreview";
import { EVENT_TYPE_NAVIGATE } from "lib/constants/tracking";
import { trackEvent } from "lib/utils/trackEvent";

export type PostsSectionProps = {
  data: Array<Blog>;
};

const PostsSection = ({ data }: PostsSectionProps) => {
  const handleClickViewAllPosts = React.useCallback(() => {
    trackEvent({
      eventName: "Home: View All Posts",
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  }, []);

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl mb-2">Recent Posts</h2>

      <div className="grid gap-8">
        {data.map((postData) => (
          <BlogPostPreview postData={postData} key={postData.id} />
        ))}
      </div>

      <div>
        <Link
          href="/blog"
          className="text-lg font-bold hover:underline"
          onClick={handleClickViewAllPosts}
        >
          view all posts
        </Link>
      </div>
    </section>
  );
};

export default PostsSection;
