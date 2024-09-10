'use client';

import { Text } from '@chakra-ui/react';
import type { Post } from 'content-collections';
import debounce from 'lodash-es/debounce';
import * as React from 'react';

import { MotionGrid } from '~/lib/components/motion/motion-grid';
import { PostSearch } from '~/lib/components/post-search';
import {
  childAnimationProps,
  staggerAnimationProps,
} from '~/lib/constants/animation';
import type { ViewCounts } from '~/lib/services/db/views';

import { BlogPostCard } from './blog-post-card';

type BlogPostListWrapperProps = {
  blogPosts: Array<Post>;
  blogViewCounts: ViewCounts;
};

export const BlogPostListWrapper = ({
  blogPosts,
  blogViewCounts,
}: BlogPostListWrapperProps) => {
  const [keyword, setKeyword] = React.useState<string>('');

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(keyword.toLowerCase()),
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChangeKeyword = React.useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(event.target.value);
    }, 150),
    [],
  );

  return (
    <>
      <PostSearch
        keyword={keyword}
        onChange={handleChangeKeyword}
        placeholder="Search Post"
      />

      <MotionGrid
        gap={16}
        marginY={12}
        gridTemplateColumns={{ md: 'repeat(2, 1fr)' }}
        {...staggerAnimationProps}
      >
        {!filteredPosts.length && <Text>No posts found.</Text>}
        {filteredPosts.map((postData) => (
          <BlogPostCard
            wrapperProps={childAnimationProps}
            postData={postData}
            key={postData.title}
            blogViewCounts={blogViewCounts}
          />
        ))}
      </MotionGrid>
    </>
  );
};
