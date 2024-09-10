import { Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

import type { FooterLinkProps } from '../types';

export const FooterLink = ({ label, url, onClick }: FooterLinkProps) => {
  return (
    <ChakraLink
      as={Link}
      href={url}
      isExternal={url.startsWith('http')}
      fontWeight="semibold"
      fontFamily="heading"
      onClick={onClick}
      aria-label={label}
    >
      {label}
    </ChakraLink>
  );
};
