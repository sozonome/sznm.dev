'use client';

import { Flex, Grid, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';
import Balancer from 'react-wrap-balancer';

import type { Note } from 'content-collections';
import { ViewCounter } from '~/lib/components/view-counter';
import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking';
import type { ViewCounts } from '~/lib/services/db/views';
import { trackEvent } from '~/lib/utils/track-event';

type NoteCardProps = {
  data: Note;
  noteViewCounts: ViewCounts;
};

export const NoteCard = ({ data, noteViewCounts }: NoteCardProps) => {
  const backgroundColor = useColorModeValue('', 'gray.700');

  const viewCount =
    noteViewCounts.find((item) => item.slug?.includes(data.id))?.count ?? 0;

  const handleClickNote = React.useCallback(() => {
    trackEvent({
      eventName: `Note: ${data.title}`,
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  }, [data.title]);

  return (
    <Flex
      direction="column"
      as={Link}
      href={`/notes/${data.id}`}
      aria-label={`Open ${data.title} note`}
      gap={4}
      padding={8}
      height="full"
      borderWidth={2}
      borderRadius={24}
      borderColor="cardBorder"
      onClick={handleClickNote}
      // biome-ignore lint/a11y/useSemanticElements: <explanation>
      role="group"
      transition="0.2s ease-out"
      justifyContent="space-between"
      _hover={{
        shadow: 'lg',
        borderColor: 'cardHoverBorder',
        borderWidth: 2,
        backgroundColor,
      }}
    >
      <Grid gap={2}>
        <Heading size="md">
          <Balancer>{data.title}</Balancer>
        </Heading>
        <Text fontSize="sm">
          <Balancer>{data.description}</Balancer>
        </Text>
      </Grid>

      <Grid gap={2}>
        <Flex gap={2} wrap="wrap">
          {data.tags?.map((tag) => (
            <Text
              borderWidth={1}
              paddingY={0.5}
              paddingX={2}
              borderRadius={12}
              transition="0.2s ease-out"
              _groupHover={{
                color: 'teal.400',
              }}
              fontSize="xs"
              color="teal"
              key={tag}
            >
              {tag}
            </Text>
          ))}
        </Flex>

        <ViewCounter
          slug={`/notes/${data.id}`}
          count={viewCount}
          fontSize="xs"
        />
      </Grid>
    </Flex>
  );
};
