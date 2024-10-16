import { Center, Divider } from '@chakra-ui/react';
import * as React from 'react';

import { useCmdMenuAction, useCmdMenuState } from '~/lib/store/cmd';

import { CommandEmpty } from './components/command-empty';
import { CommandGroup } from './components/command-group';
import { CommandInput } from './components/command-input';
import { CommandItem } from './components/command-item';
import { CommandList } from './components/command-list';
import { CommandWrapper } from './components/command-wrapper';
import { commands } from './constants';
import { useCommandCenterAction } from './hook';
import type { CommandCollection, CommandEntry } from './types';

export const CommandMenu = () => {
  const { isOpen } = useCmdMenuState();
  const { closeCmdMenu } = useCmdMenuAction();
  const { onSelectItem } = useCommandCenterAction();

  const handleSelect = React.useCallback(
    (commandGroup: CommandCollection, item: CommandEntry) => () =>
      onSelectItem(commandGroup, item),
    [onSelectItem],
  );

  return (
    <CommandWrapper isOpen={isOpen} onClose={closeCmdMenu}>
      <CommandInput />

      <Center height={6}>
        <Divider />
      </Center>

      <CommandList>
        <CommandEmpty />

        {commands.map((commandGroup) => (
          <CommandGroup data={commandGroup} key={commandGroup.heading}>
            {commandGroup.items.map((item) => (
              <CommandItem
                data={item}
                onSelect={handleSelect(commandGroup, item)}
                key={item.id}
              />
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandWrapper>
  );
};
