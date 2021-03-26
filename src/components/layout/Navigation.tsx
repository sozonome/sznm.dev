import { Button } from "@chakra-ui/react";
import { FaFeatherAlt, FaHome, FaRocket, FaUser } from "react-icons/fa";
import { useRouter } from "next/router";
import { IconType } from "react-icons";

type NavItemProps = {
  href: string;
  icon: IconType;
};

const NavItem = ({ href, icon }: NavItemProps) => {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      flexBasis={"25%"}
      fontSize={["3xl", "md"]}
      padding={0}
      onClick={() => router.push(href)}
    >
      {icon({ style: { cursor: "pointer" } })}
    </Button>
  );
};

const navigations: NavItemProps[] = [
  {
    href: "/",
    icon: FaHome,
  },
  {
    href: "/projects",
    icon: FaRocket,
  },
  {
    href: "/blog",
    icon: FaFeatherAlt,
  },
  {
    href: "/about",
    icon: FaUser,
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
