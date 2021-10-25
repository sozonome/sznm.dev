import { IconButton, Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IconType } from "react-icons";
import { FaFeatherAlt, FaHome, FaRocket, FaUser } from "react-icons/fa";

import { trackEventToUmami } from "utils/trackEvent";

type NavItemProps = {
  href: string;
  label: string;
  icon: IconType;
};

const NavItem = ({ href, label, icon }: NavItemProps) => {
  const router = useRouter();

  const handleClickNavigation = () => {
    trackEventToUmami(`Nav Link: ${label}`, "navigate");
    router.push(href);
  };

  return (
    <Tooltip label={label}>
      <IconButton
        aria-label={label}
        variant="ghost"
        flexBasis="25%"
        fontSize={["2xl", "md"]}
        padding={0}
        onClick={handleClickNavigation}
      >
        {icon({ style: { cursor: "pointer" } })}
      </IconButton>
    </Tooltip>
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
