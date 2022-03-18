import { Link } from "@chakra-ui/react";

import type { FooterLinkProps } from "./types";

const FooterLink = ({ label, url, onClick }: FooterLinkProps) => {
  return (
    <Link
      href={url}
      isExternal
      fontWeight="semibold"
      fontFamily="heading"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default FooterLink;
