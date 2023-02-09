import { Text } from '@chakra-ui/react';
import { Command } from 'cmdk';

const CommandEmpty = () => {
  return (
    <Text as={Command.Empty} textAlign="center">
      No results found.
    </Text>
  );
};

export default CommandEmpty;
