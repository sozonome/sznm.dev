import type {
  CommandCollection,
  CommandEntry,
} from "lib/components/commands/types";

export type CommandMenuStore = {
  isOpen: boolean;
  openCmdMenu: () => void;
  closeCmdMenu: () => void;
  onSelectItem: (group: CommandCollection, item: CommandEntry) => void;

  setIsOpen: (isOpen: boolean) => void;
  setOpenCmdMenu: (onOpen: () => void) => void;
  setCloseCmdMenu: (onClose: () => void) => void;
  setOnSelectItem: (
    onSelectItem: (group: CommandCollection, item: CommandEntry) => void
  ) => void;
};
