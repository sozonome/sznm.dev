import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IconType } from "react-icons";
import { FaFeatherAlt, FaHome, FaRocket, FaUser } from "react-icons/fa";

type NavItemProps = {
  href: string;
  label: string;
  icon: IconType;
};

const NavItem = ({ href, label, icon }: NavItemProps) => {
  const router = useRouter();

  return (
    <IconButton
      aria-label={label}
      variant="ghost"
      flexBasis="25%"
      fontSize={["3xl", "md"]}
      padding={0}
      onClick={() => router.push(href)}
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
