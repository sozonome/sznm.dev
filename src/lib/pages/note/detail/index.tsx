'use client';

import { Box, Spacer, useColorModeValue } from '@chakra-ui/react';
import type { GiscusProps } from '@giscus/react';
import Giscus from '@giscus/react';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { renderers } from '~/lib/components/blog/renderers';
import NoteDetailHead from '~/lib/components/notes/detail/Head';
import ShareButtons from '~/lib/components/shared/ShareButtons';
import { sortedNotes } from '~/lib/constants/note';

import styles from './styles.module.scss';
import type { NoteDetailProps } from './types';

const NoteDetail = ({ params }: NoteDetailProps) => {
  const data = sortedNotes.find(({ id }) => id === (params?.id as string));

  const giscusTheme: GiscusProps['theme'] = useColorModeValue('light', 'dark');

  if (!data) {
    return notFound();
  }

  return (
    <Box as="article">
      <NoteDetailHead data={data} />
      <ShareButtons title={`Check out this note: ${data.title}`} />
      <Spacer height={16} />
      <ReactMarkdown
        className={styles.content}
        rehypePlugins={[rehypeRaw]}
        components={renderers}
      >
        {data.body.raw}
      </ReactMarkdown>

      <ShareButtons title={`Check out this note: ${data.title}`} />

      <Box marginY={12}>
        <Giscus
          repo="sozonome/sznm.dev"
          repoId="MDEwOlJlcG9zaXRvcnkyNjY2Njk3MDg="
          mapping="pathname"
          category="Notes"
          categoryId="DIC_kwDOD-UOjM4CQX_7"
          reactionsEnabled="1"
          theme={giscusTheme}
          emitMetadata="0"
        />
      </Box>
    </Box>
  );
};

export default NoteDetail;
