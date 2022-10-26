import { IconButton } from "@chakra-ui/react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaCode, FaFeatherAlt, FaHome, FaRocket, FaUser } from "react-icons/fa";

import { EVENT_TYPE_NAVIGATE } from "lib/constants/tracking";
import { trackEvent } from "lib/utils/trackEvent";

type NavItemProps = {
  href: string;
  label: string;
  icon: IconType;
};

const NavItem = ({ href, label, icon }: NavItemProps) => {
  const handleClickNavigation = () => {
    trackEvent({
      eventName: `Nav Link: ${label}`,
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  };

  return (
    <IconButton
      as={Link}
      href={href}
      aria-label={label}
      variant="ghost"
      flexBasis="25%"
      fontSize={["xl", "md"]}
      padding={0}
      onClick={handleClickNavigation}
    >
      {icon({ style: { cursor: "pointer" } })}
    </IconButton>
  );
};

const navigations: NavItemProps[] = [
  {
    href: "/",
    label: "Home",
    icon: FaHome,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: FaRocket,
  },
  {
    href: "/blog",
    label: "Blog",
    icon: FaFeatherAlt,
  },
  {
    href: "/snippets",
    label: "Snippets",
    icon: FaCode,
  },
  {
    href: "/about",
    label: "About",
    icon: FaUser,
  },
];

const Navigation = () => {
  return (
    <>
      {navigations.map((navigation) => (
        <NavItem {...navigation} key={navigation.label} />
      ))}
    </>
  );
};

export default Navigation;
