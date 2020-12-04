import { Box } from "@chakra-ui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFeatherAlt,
  faHome,
  faRocket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type NavItemProps = {
  href: string;
  icon: IconProp;
};

const NavItem = ({ href, icon }: NavItemProps) => {
  return (
    <Link href={href} passHref>
      <Box as="a" flexBasis={"25%"}>
        <FontAwesomeIcon icon={icon} style={{ cursor: "pointer" }} />
      </Box>
    </Link>
  );
};

const navigations: NavItemProps[] = [
  {
    href: "/",
    icon: faHome,
  },
  {
    href: "/projects",
    icon: faRocket,
  },
  {
    href: "/blog",
    icon: faFeatherAlt,
  },
  {
    href: "/about",
    icon: faUser,
  },
];

const Navigation = () => {
  return (
    <>
      {navigations.map((navigation, index) => (
        <NavItem {...navigation} key={index} />
      ))}
    </>
  );
};

export default Navigation;
