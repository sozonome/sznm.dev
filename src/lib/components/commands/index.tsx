import { Divider, Box, Heading, Center, Text, Flex } from "@chakra-ui/react";
import { Command } from "cmdk";

import ModalWrapper from "lib/components/shared/ModalWrapper";

import { commands } from "./constants";
import type { CommandGroup, CommandItem } from "./types";

type CommandMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (group: CommandGroup, item: CommandItem) => void;
};

const CommandMenu = ({ isOpen, onClose, onSelectItem }: CommandMenuProps) => {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick
      withCloseButton={false}
      modalContentProps={{
        backgroundColor: "transparent",
        borderRadius: 24,
        marginX: { base: 6, md: 0 },
      }}
      modalBodyProps={{
        padding: 0,
        fontFamily: "heading",
        backgroundColor: "headerAlphaBackground",
        layerStyle: "blur-bg",
        borderRadius: 24,
      }}
      body={
        <Box as={Command} paddingY={5}>
          <Box
            as={Command.Input}
            paddingX={4}
            width="full"
            background="transparent"
            outline="none"
            placeholder="Type a command or search..."
          />
          <Center height={6}>
            <Divider />
          </Center>
          <Box
            as={Command.List}
            paddingX={2}
            height={400}
            overflow="auto"
            overscrollBehavior="contain"
            transition="100ms ease"
            paddingBottom={12}
            sx={{
              scrollPaddingBlockEnd: 12,
              "[cmdk-list-sizer]": { display: "grid", gap: 6 },
            }}
          >
            <Text as={Command.Empty} textAlign="center" color="description">
              No results found.
            </Text>

            {commands.map((commandGroup) => (
              <Box
                as={Command.Group}
                heading={
                  <Heading
                    fontSize="xs"
                    color="description"
                    paddingX={2}
                    userSelect="none"
                  >
                    {commandGroup.heading}
                  </Heading>
                }
              >
                {commandGroup.items.map((item) => (
                  <Flex
                    as={Command.Item}
                    onSelect={() => onSelectItem(commandGroup, item)}
                    minHeight={12}
                    cursor="pointer"
                    borderRadius={8}
                    alignItems="center"
                    gap={2}
                    paddingX={2}
                    userSelect="none"
                    transition="all 150ms ease"
                    sx={{
                      contentVisibility: "auto",
                      '&[aria-selected="true"]': {
                        color: "white",
                        backgroundColor: "selectedCommandItemBackground",
                      },
                      '&[aria-disabled="true"]': {
                        color: "gray",
                        cursor: "not-allowed",
                      },
                      "&:first-child": {
                        marginTop: 2,
                      },
                    }}
                  >
                    <Text fontSize="sm">{item.name}</Text>
                  </Flex>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      }
    />
  );
};

export default CommandMenu;
