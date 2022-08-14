import create from "zustand";

import type { CommandMenuStore } from "./types";

export const useCmdMenu = create<CommandMenuStore>((set) => ({
  isOpen: false,
  openCmdMenu: () => set({ isOpen: true }),
  closeCmdMenu: () => set({ isOpen: false }),
}));
