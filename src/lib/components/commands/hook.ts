import { useColorMode, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import * as React from "react";
import shallow from "zustand/shallow";

import { useCmdMenu } from "lib/store/cmd";
import { trackEvent } from "lib/utils/trackEvent";

import type { CommandCollection, CommandEntry } from "./types";
import { CommandType } from "./types";

export const useCommandCenter = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode } = useColorMode();

  const { setIsOpen, setOpenCmdMenu, setCloseCmdMenu, setOnSelectItem } =
    useCmdMenu(
      (state) => ({
        setIsOpen: state.setIsOpen,
        setOpenCmdMenu: state.setOpenCmdMenu,
        setCloseCmdMenu: state.setCloseCmdMenu,
        setOnSelectItem: state.setOnSelectItem,
      }),
      shallow
    );

  React.useEffect(() => {
    const down = (ev: KeyboardEvent) => {
      if (ev.key === "k" && ev.metaKey) {
        if (isOpen) {
          onClose();
          return;
        }
        trackEvent({
          eventValue: "open cmd center with cmd+k",
          eventType: "cmd",
        });
        onOpen();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOpen, onClose, onOpen]);

  const onSelectItem = React.useCallback(
    (group: CommandCollection, item: CommandEntry) => {
      trackEvent({
        eventValue: `${group.heading}: ${item.name}`,
        eventType: "cmd",
      });

      if (group.type === CommandType.theme) {
        toggleColorMode();
        return;
      }
      const prefix = group.pathPrefix ? `${group.pathPrefix}/` : "";
      onClose();
      router.push(`/${prefix}${item.id}`);
    },
    [onClose, router, toggleColorMode]
  );

  React.useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen, setIsOpen]);

  React.useEffect(() => {
    setOpenCmdMenu(onOpen);
  }, [onOpen, setOpenCmdMenu]);

  React.useEffect(() => {
    setCloseCmdMenu(onClose);
  }, [onClose, setCloseCmdMenu]);

  React.useEffect(() => {
    setOnSelectItem(onSelectItem);
  }, [onSelectItem, setOnSelectItem]);
};
