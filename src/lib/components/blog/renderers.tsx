import {
  Link as ChakraLink,
  Table,
  Tbody,
  Td,
  Thead,
  Tr,
} from '@chakra-ui/react';
import type { Components } from 'react-markdown/lib';

import CodeBlock from './CodeBlock';
import HeadingLink from './HeadingLink';

export const renderers: Components = {
  code: CodeBlock,
  a: ({ href, children }) => {
    return (
      <ChakraLink href={href} isExternal wordBreak="break-word">
        {children}
      </ChakraLink>
    );
  },
  h1: ({ children }) => <HeadingLink as="h1">{String(children)}</HeadingLink>,
  h2: ({ children }) => <HeadingLink as="h2">{String(children)}</HeadingLink>,
  h3: ({ children }) => <HeadingLink as="h3">{String(children)}</HeadingLink>,
  h4: ({ children }) => <HeadingLink as="h4">{String(children)}</HeadingLink>,
  h5: ({ children }) => <HeadingLink as="h5">{String(children)}</HeadingLink>,
  h6: ({ children }) => <HeadingLink as="h6">{String(children)}</HeadingLink>,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  td: Td,
};
