import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/core";
import Link, { LinkProps } from "next/link";

type AccessibleLinkProps = LinkProps & ChakraLinkProps;

const AccessibleLink = ({
  href,
  isExternal,
  children,
  isDisabled,
}: AccessibleLinkProps) => {
  return (
    <Link href={href} passHref>
      <ChakraLink isDisabled={isDisabled} isExternal={isExternal}>
        {children}
      </ChakraLink>
    </Link>
  );
};

export default AccessibleLink;
