import { useColorMode, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import * as React from "react";

import { trackEvent } from "lib/utils/trackEvent";

import type { CommandGroup, CommandItem } from "./types";
import { CommandType } from "./types";

export const useCommandCenter = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode } = useColorMode();

  React.useEffect(() => {
    const down = (ev: KeyboardEvent) => {
      if (ev.key === "k" && ev.metaKey) {
        if (isOpen) {
          onClose();
          return;
        }
        onOpen();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOpen, onClose, onOpen]);

  const onSelectItem = (group: CommandGroup, item: CommandItem) => {
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
  };

  return { isOpen, onClose, onSelectItem, onOpen };
};
