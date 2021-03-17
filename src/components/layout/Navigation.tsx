import { Box, Button } from "@chakra-ui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFeatherAlt,
  faHome,
  faRocket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";

type NavItemProps = {
  href: string;
  icon: IconProp;
};

const NavItem = ({ href, icon }: NavItemProps) => {
  const router = useRouter();

  return (
    <Button variant="ghost" flexBasis={"25%"} fontSize={["3xl", "md"]} onClick={() => router.push(href)}>
      <FontAwesomeIcon icon={icon} style={{ cursor: "pointer" }} />
    </Button>
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
