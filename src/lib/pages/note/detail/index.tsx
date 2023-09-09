import { Box, Spacer } from '@chakra-ui/react';
import { notFound } from 'next/navigation';

import NoteDetailHead from '~/lib/components/notes/detail/Head';
import GiscusWrapper from '~/lib/components/shared/GiscusWrapper';
import MarkdownContent from '~/lib/components/shared/MarkdownContent';
import ShareButtons from '~/lib/components/shared/ShareButtons';
import { sortedNotes } from '~/lib/constants/note';

import type { NoteDetailProps } from './types';

const NoteDetail = ({ params }: NoteDetailProps) => {
  const data = sortedNotes.find(({ id }) => id === params?.id);

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
        <GiscusWrapper category="Notes" categoryId="DIC_kwDOD-UOjM4CQX_7" />
      </Box>
    </Box>
  );
};

export default NoteDetail;
