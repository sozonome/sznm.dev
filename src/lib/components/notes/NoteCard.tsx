'use client';

import { Flex, Grid, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';

import type { Note } from 'contentlayer/generated';
import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking';
import { trackEvent } from '~/lib/utils/trackEvent';

type NoteCardProps = {
  data: Note;
};

const NoteCard = ({ data }: NoteCardProps) => {
  const backgroundColor = useColorModeValue('', 'gray.700');

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
      transition="0.2s ease-out"
      role="group"
      _hover={{
        shadow: 'lg',
        borderColor: 'cardHoverBorder',
        borderWidth: 2,
        backgroundColor,
      }}
    >
      <Grid gap={2}>
        <Heading size="md">{data.title}</Heading>
        <Text fontSize="sm">{data.description}</Text>
      </Grid>

      <Flex gap={2}>
        {data.stacks?.map((stack) => (
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
            key={stack}
          >
            {stack}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default NoteCard;
