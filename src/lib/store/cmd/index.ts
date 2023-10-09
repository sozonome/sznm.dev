import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import type { CommandMenuStore } from './types';

export const useCmdMenu = createWithEqualityFn<CommandMenuStore>(
  (set) => ({
    isOpen: false,
    openCmdMenu: () => set({ isOpen: true }),
    closeCmdMenu: () => set({ isOpen: false }),
  }),
  shallow
);
