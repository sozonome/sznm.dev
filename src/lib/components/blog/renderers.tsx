import {
  Box,
  Button,
  Code,
  createStandaloneToast,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import type { Options } from "react-markdown/lib/ast-to-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import HeadingLink from "./HeadingLink";

const { toast } = createStandaloneToast();

export const renderers: Options["components"] = {
  code: ({ inline, className, children, ...props }) => {
    /** https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight */
    const match = /language-(\w+)/.exec(className || "");
    const language = match?.[1];
    const childrenValue = String(children).replace(/\n$/, "");
    const toastId = childrenValue.substring(0, 10);
    const handleClickCopy = () => {
      navigator.clipboard.writeText(childrenValue);
      if (!toast.isActive(toastId)) {
        toast({
          id: toastId,
          status: "success",
          position: "top-right",
          title: "Copied",
          isClosable: true,
        });
      }
    };

    return !inline && match ? (
      <Box width="100%">
        <Flex alignItems="center">
          {language && <Code>{language}</Code>}
          <Button
            marginLeft="auto"
            colorScheme="green"
            height={6}
            padding={0}
            fontSize={12}
            textTransform="lowercase"
            onClick={handleClickCopy}
          >
            Copy
          </Button>
        </Flex>
        <SyntaxHighlighter
          language={language}
          style={dracula}
          showLineNumbers={false}
        >
          {childrenValue}
        </SyntaxHighlighter>
      </Box>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
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
