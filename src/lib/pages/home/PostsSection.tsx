import { Button } from "@chakra-ui/react";
import type { Blog } from "contentlayer/generated";
import Link from "next/link";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";

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
        <Button
          as={Link}
          href="/blog"
          rightIcon={<FaArrowRight />}
          size="lg"
          fontFamily="heading"
          variant="outline"
          onClick={handleClickViewAllPosts}
        >
          view all posts
        </Button>
      </div>
    </section>
  );
};

export default PostsSection;
