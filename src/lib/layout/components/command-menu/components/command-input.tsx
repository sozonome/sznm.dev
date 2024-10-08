import { Box } from '@chakra-ui/react';
import { Command } from 'cmdk';

export const CommandInput = () => {
  return (
    <Box
      as={Command.Input}
      paddingX={4}
      width="full"
      background="transparent"
      outline="none"
      placeholder="Type a command or search..."
    />
  );
};
