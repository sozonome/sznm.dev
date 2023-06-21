import { Link as ChakraLink } from '@chakra-ui/react';
import type { Options } from 'react-markdown/lib/ast-to-react';

import CodeBlock from './CodeBlock';
import HeadingLink from './HeadingLink';

export const renderers: Options['components'] = {
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
};
