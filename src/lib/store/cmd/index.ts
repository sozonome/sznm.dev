import create from "zustand";

import type { CommandMenuStore } from "./types";

export const useCmdMenu = create<CommandMenuStore>((set) => ({
  isOpen: false,
  openCmdMenu: () => {},
  closeCmdMenu: () => {},
  onSelectItem: () => {},
  setIsOpen: (isOpen) => set({ isOpen }),
  setOpenCmdMenu: (openCmdMenu) => set({ openCmdMenu }),
  setCloseCmdMenu: (closeCmdMenu) => set({ closeCmdMenu }),
  setOnSelectItem: (onSelectItem) => set({ onSelectItem }),
}));
