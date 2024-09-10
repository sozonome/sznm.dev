import { Box, Grid, Spacer } from '@chakra-ui/react';
import { notFound } from 'next/navigation';

import { DetailViewCounts } from '~/lib/components/detail-view-counts';
import { GiscusWrapper } from '~/lib/components/giscus-wrapper';
import { MarkdownContent } from '~/lib/components/markdown-content';
import { ShareButtons } from '~/lib/components/share-buttons';
import { getNoteBySlug } from '~/lib/services/content/note';

import { NoteDetailHead } from './note-detail-head';

import type { NoteDetailProps } from './types';

const NoteDetail = ({ params }: NoteDetailProps) => {
  const data = getNoteBySlug(params.id);

  if (!data) {
    notFound();
  }

  return (
    <Box as="article">
      <Grid gap={8}>
        <NoteDetailHead data={data} />
        <DetailViewCounts slug={`/notes/${params.id}`} />
        <ShareButtons title={`Check out this note: ${data.title}`} />
      </Grid>
      <Spacer height={8} />
      <MarkdownContent rawContent={data.content} />
      <Spacer height={8} />

      <ShareButtons title={`Check out this note: ${data.title}`} />

      <Box marginY={12}>
        <GiscusWrapper category="Notes" categoryId="DIC_kwDOD-UOjM4CQX_7" />
      </Box>
    </Box>
  );
};

export default NoteDetail;
