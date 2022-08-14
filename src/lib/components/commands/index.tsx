import { Divider, Center } from "@chakra-ui/react";
import shallow from "zustand/shallow";

import { useCmdMenu } from "lib/store/cmd";

import CommandEmpty from "./components/CommandEmpty";
import CommandGroup from "./components/CommandGroup";
import CommandInput from "./components/CommandInput";
import CommandItem from "./components/CommandItem";
import CommandList from "./components/CommandList";
import CommandWrapper from "./components/CommandWrapper";
import { commands } from "./constants";
import { useCommandCenterAction } from "./hook";

const CommandMenu = () => {
  const { isOpen, closeCmdMenu } = useCmdMenu(
    (state) => ({
      isOpen: state.isOpen,
      closeCmdMenu: state.closeCmdMenu,
    }),
    shallow
  );
  const { onSelectItem } = useCommandCenterAction();

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
                onSelect={() => onSelectItem(commandGroup, item)}
                key={item.id}
              />
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandWrapper>
  );
};

export default CommandMenu;
