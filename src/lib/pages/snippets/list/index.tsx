'use client';

import { Grid, Heading, Text } from '@chakra-ui/react';

import MotionBox from '~/lib/components/motion/MotionBox';
import MotionGrid from '~/lib/components/motion/MotionGrid';
import SnippetCard from '~/lib/components/snippets/SnippetCard';
import {
  childAnimationProps,
  staggerAnimationProps,
} from '~/lib/constants/animation';
import { sortedSnippets } from '~/lib/constants/snippet';

const snippets = sortedSnippets;

const SnippetList = () => {
  return (
    <Grid gap={12}>
      <Grid gap={2}>
        <Heading>Snippets</Heading>
        <Text>
          A collection of my personal snippets I use throughout my projects
        </Text>
      </Grid>

      <MotionGrid
        {...staggerAnimationProps}
        gap={6}
        gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
      >
        {snippets.map((item) => (
          <MotionBox {...childAnimationProps} key={item.id}>
            <SnippetCard data={item} />
          </MotionBox>
        ))}
      </MotionGrid>
    </Grid>
  );
};

export default SnippetList;
