import { IconButton } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";
import { RiCommandFill } from "react-icons/ri";

import CommandMenu from "lib/components/commands";
import { EVENT_TYPE_CTA } from "lib/constants/tracking";
import { useCmdMenu } from "lib/store/cmd";
import { trackEvent } from "lib/utils/trackEvent";

import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { openCmdMenu } = useCmdMenu((state) => ({
    openCmdMenu: state.openCmdMenu,
  }));

  const handleOpenCommandCenter = React.useCallback(() => {
    trackEvent({
      eventName: "open cmd center",
      eventData: { type: EVENT_TYPE_CTA },
    });
    openCmdMenu();
  }, [openCmdMenu]);

  return (
    <>
      <header className="fixed top-0 z-[5] blur-bg w-full alpha-bg dark:alpha-bg-dark">
        <div className="flex layout-block items-center">
          <Link href="/">
            <h1 className="text-md font-medium sm:text-xl font-heading">
              sznm.dev
            </h1>
          </Link>

          <div className="flex-1 justify-self-stretch" />

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex">
              <Navigation />
            </div>

            <div className="flex gap-2">
              <IconButton
                aria-label="command-center"
                icon={<RiCommandFill />}
                backgroundColor="transparent"
                onClick={handleOpenCommandCenter}
              />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <CommandMenu />
    </>
  );
};

export default Header;
