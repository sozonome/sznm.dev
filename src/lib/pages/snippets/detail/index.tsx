'use client';

import { Box, Spacer, useColorModeValue } from '@chakra-ui/react';
import type { GiscusProps } from '@giscus/react';
import Giscus from '@giscus/react';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { renderers } from '~/lib/components/blog/renderers';
import ShareButtons from '~/lib/components/shared/ShareButtons';
import SnippetDetailHead from '~/lib/components/snippets/detail/Head';
import { sortedSnippets } from '~/lib/constants/snippet';

import styles from './Snippet.module.scss';
import type { SnippetDetailProps } from './types';

const SnippetDetail = ({ params }: SnippetDetailProps) => {
  const data = sortedSnippets.find(({ id }) => id === (params?.id as string));

  const giscusTheme: GiscusProps['theme'] = useColorModeValue('light', 'dark');

  if (!data) {
    return notFound();
  }

  return (
    <Box as="article">
      <SnippetDetailHead data={data} />
      <ShareButtons title={`Check out this snippet: ${data.title}`} />
      <Spacer height={16} />
      <ReactMarkdown
        className={styles.content}
        rehypePlugins={[rehypeRaw]}
        components={renderers}
      >
        {data.body.raw}
      </ReactMarkdown>

      <ShareButtons title={`Check out this snippet: ${data.title}`} />

      <Box marginY={12}>
        <Giscus
          repo="sozonome/sznm.dev"
          repoId="MDEwOlJlcG9zaXRvcnkyNjY2Njk3MDg="
          mapping="pathname"
          category="Snippets"
          categoryId="DIC_kwDOD-UOjM4CQX_7"
          reactionsEnabled="1"
          theme={giscusTheme}
          emitMetadata="0"
        />
      </Box>
    </Box>
  );
};

export default SnippetDetail;
