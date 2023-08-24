'use client';

import { Box, Spacer, useColorModeValue } from '@chakra-ui/react';
import type { GiscusProps } from '@giscus/react';
import Giscus from '@giscus/react';
import { notFound } from 'next/navigation';

import NoteDetailHead from '~/lib/components/notes/detail/Head';
import MarkdownContent from '~/lib/components/shared/MarkdownContent';
import ShareButtons from '~/lib/components/shared/ShareButtons';
import { sortedNotes } from '~/lib/constants/note';

import type { NoteDetailProps } from './types';

const NoteDetail = ({ params }: NoteDetailProps) => {
  const data = sortedNotes.find(({ id }) => id === params?.id);

  const giscusTheme: GiscusProps['theme'] = useColorModeValue('light', 'dark');

  if (!data) {
    return notFound();
  }

  return (
    <Box as="article">
      <NoteDetailHead data={data} />
      <ShareButtons title={`Check out this note: ${data.title}`} />
      <Spacer height={8} />
      <MarkdownContent rawContent={data.body.raw} />
      <Spacer height={8} />

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
