import { create } from 'zustand';
import { useShallow } from 'zustand/shallow';

import type { CommandMenuStore } from './types';

export const useCmdMenu = create<CommandMenuStore>()((set) => ({
  isOpen: false,
  openCmdMenu: () => set({ isOpen: true }),
  closeCmdMenu: () => set({ isOpen: false }),
}));

export const useCmdMenuState = () =>
  useCmdMenu(useShallow(({ isOpen }) => ({ isOpen })));

export const useCmdMenuAction = () =>
  useCmdMenu(
    useShallow(({ openCmdMenu, closeCmdMenu }) => ({
      openCmdMenu,
      closeCmdMenu,
    })),
  );
