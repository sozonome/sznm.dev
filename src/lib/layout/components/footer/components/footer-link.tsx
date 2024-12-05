import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';

import type { FooterLinkProps } from '../types';

export const FooterLink = ({ label, url, onClick }: FooterLinkProps) => {
  const isExternal = url.startsWith('http');
  return (
    <ChakraLink
      asChild
      fontWeight="semibold"
      fontFamily="heading"
      onClick={onClick}
      aria-label={label}
    >
      <NextLink href={url} target={isExternal ? '_blank' : undefined}>
        {label}
      </NextLink>
    </ChakraLink>
  );
};
