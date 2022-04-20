import { IconButton } from "@chakra-ui/react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaFeatherAlt, FaHome, FaRocket, FaUser } from "react-icons/fa";

import { trackEventToUmami } from "lib/utils/trackEvent";

type NavItemProps = {
  href: string;
  label: string;
  icon: IconType;
};

const NavItem = ({ href, label, icon }: NavItemProps) => {
  const handleClickNavigation = () => {
    trackEventToUmami({
      eventValue: `Nav Link: ${label}`,
      eventType: "navigate",
    });
  };

  return (
    <Link href={href} passHref>
      <IconButton
        as="a"
        aria-label={label}
        variant="ghost"
        flexBasis="25%"
        fontSize={["2xl", "md"]}
        padding={0}
        onClick={handleClickNavigation}
      >
        {icon({ style: { cursor: "pointer" } })}
      </IconButton>
    </Link>
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
