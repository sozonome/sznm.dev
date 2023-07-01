import { Heading, Link } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

import { convertToId, convertToIdLink } from '~/lib/utils/convertToIdLink';

type HeadingLinkProps = {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const HeadingLink = ({ children, as }: HeadingLinkProps) => {
  const pathname = usePathname();
  const level = Number((as ?? 'h3').split('h')[1]);

  const size: Record<number, string> = {
    1: 'xl',
    2: 'lg',
    3: 'md',
    4: 'sm',
    5: 'sm',
    6: 'sm',
  };

  return (
    <Link
      href={convertToIdLink(pathname ?? '', String(children))}
      style={{ textDecoration: 'none', marginTop: 16 }}
    >
      <Heading
        as={as}
        size={size[level]}
        marginY={4 + (7 - level) * 0.5}
        id={convertToId(String(children))}
        textDecoration="none"
        marginTop={6}
        scrollMarginTop={24}
        _hover={{
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
      >
        {children}
      </Heading>
    </Link>
  );
};

export default HeadingLink;
