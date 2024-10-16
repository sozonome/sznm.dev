import { useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import * as React from 'react';

import { EVENT_TYPE_CMD } from '~/lib/constants/tracking';
import { useCmdMenuAction, useCmdMenuState } from '~/lib/store/cmd';
import { isMac } from '~/lib/utils/is-mac';
import { trackEvent } from '~/lib/utils/track-event';

import type { CommandCollection, CommandEntry } from './types';

export const useCommandCenter = () => {
  const { isOpen } = useCmdMenuState();

  const { openCmdMenu, closeCmdMenu } = useCmdMenuAction();

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
    [closeCmdMenu, isOpen, openCmdMenu],
  );

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeydownTrigger);
    return () => document.removeEventListener('keydown', handleKeydownTrigger);
  }, [handleKeydownTrigger]);
};

export const useCommandCenterAction = () => {
  const router = useRouter();
  const { toggleColorMode } = useColorMode();

  const { closeCmdMenu } = useCmdMenuAction();

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
