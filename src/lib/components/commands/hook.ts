import { useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import * as React from "react";
import shallow from "zustand/shallow";

import { useCmdMenu } from "lib/store/cmd";
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
      if (ev.key === "k" && ev.metaKey) {
        if (isOpen) {
          closeCmdMenu();
          return;
        }
        trackEvent({
          eventValue: "open cmd center with cmd+k",
          eventType: "cmd",
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
      eventValue: `${group.heading}: ${item.name}`,
      eventType: "cmd",
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
