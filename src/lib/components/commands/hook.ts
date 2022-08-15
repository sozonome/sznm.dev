import { useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import * as React from "react";
import shallow from "zustand/shallow";

import { EVENT_TYPE_CMD } from "lib/constants/tracking";
import { useCmdMenu } from "lib/store/cmd";
import { isMac } from "lib/utils/isMac";
import { trackEvent } from "lib/utils/trackEvent";

import type { CommandCollection, CommandEntry } from "./types";
import { CommandType } from "./types";

export const useCommandCenter = () => {
  const isOpen = useCmdMenu((state) => state.isOpen);

  const { openCmdMenu, closeCmdMenu } = useCmdMenu(
    (state) => ({
      openCmdMenu: state.openCmdMenu,
      closeCmdMenu: state.closeCmdMenu,
    }),
    shallow
  );

  React.useEffect(() => {
    const down = (ev: KeyboardEvent) => {
      if (ev.key === "k" && (isMac ? ev.metaKey : ev.ctrlKey)) {
        if (isOpen) {
          closeCmdMenu();
          return;
        }
        trackEvent({
          eventName: "open cmd center with cmd+k",
          eventData: { type: EVENT_TYPE_CMD },
        });
        openCmdMenu();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [closeCmdMenu, isOpen, openCmdMenu]);
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

    if (group.type === CommandType.theme) {
      toggleColorMode();
      return;
    }
    const prefix = group.pathPrefix ? `${group.pathPrefix}/` : "";
    closeCmdMenu();
    router.push(`/${prefix}${item.id}`);
  };

  return { onSelectItem };
};
