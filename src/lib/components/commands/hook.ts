import { useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import { EVENT_TYPE_CMD } from '~/lib/constants/tracking';
import { useCmdMenu } from '~/lib/store/cmd';
import { isMac } from '~/lib/utils/isMac';
import { trackEvent } from '~/lib/utils/trackEvent';

import type { CommandCollection, CommandEntry } from './types';

export const useCommandCenter = () => {
  const isOpen = useCmdMenu((state) => state.isOpen);

  const { openCmdMenu, closeCmdMenu } = useCmdMenu(
    (state) => ({
      openCmdMenu: state.openCmdMenu,
      closeCmdMenu: state.closeCmdMenu,
    }),
    shallow
  );

  const handleKeydownTrigger = React.useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key === 'k' && (isMac ? ev.metaKey : ev.ctrlKey)) {
        ev.preventDefault();
        ev.stopPropagation();

        if (isOpen) {
          closeCmdMenu();
          return;
        }
        trackEvent({
          eventName: 'open cmd center with cmd+k',
          eventData: { type: EVENT_TYPE_CMD },
        });
        openCmdMenu();
      }
    },
    [closeCmdMenu, isOpen, openCmdMenu]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeydownTrigger);
    return () => document.removeEventListener('keydown', handleKeydownTrigger);
  }, [handleKeydownTrigger]);
};

export const useCommandCenterAction = () => {
  const router = useRouter();
  const { toggleColorMode } = useColorMode();

  const closeCmdMenu = useCmdMenu((state) => state.closeCmdMenu);

  const onSelectItem = (group: CommandCollection, item: CommandEntry) => {
    trackEvent({
      eventName: `${group.heading}: ${item.name}`,
      eventData: { type: EVENT_TYPE_CMD },
    });

    if (group.type === 'theme') {
      toggleColorMode();
      return;
    }
    const prefix = group.pathPrefix ? `${group.pathPrefix}/` : '';
    closeCmdMenu();
    router.push(`/${prefix}${item.id}`);
  };

  return { onSelectItem };
};
