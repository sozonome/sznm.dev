import { Flex, Text } from '@chakra-ui/react';
import { Command } from 'cmdk';

import type { CommandEntry } from '~/lib/layout/components/command-menu/types';

type CommandItemProps = {
  data: CommandEntry;
  onSelect: () => void;
};

export const CommandItem = ({ data, onSelect }: CommandItemProps) => {
  return (
    <Flex
      as={Command.Item}
      marginLeft={6}
      onSelect={onSelect}
      minHeight={12}
      cursor="pointer"
      borderRadius={8}
      alignItems="center"
      gap={2}
      paddingX={2}
      userSelect="none"
      transition="all 150ms ease"
      sx={{
        contentVisibility: 'auto',
        '&[aria-selected="true"]': {
          color: 'white',
          backgroundColor: 'selectedCommandItemBackground',
        },
        '&[aria-disabled="true"]': {
          color: 'gray',
          cursor: 'not-allowed',
        },
        '&:first-of-type': {
          marginTop: 2,
        },
      }}
    >
      <Text fontSize="sm" fontFamily="body">
        {data.name}
      </Text>
    </Flex>
  );
};
