import {
  Box,
  Button,
  Code,
  Flex,
  Heading,
  HeadingProps,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ElementType } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";
import { useRouter } from "next/router";

export const renderers = {
  code: ({ language, value }) => {
    return (
      <Box>
        <Flex alignItems="center">
          {language && <Code colorScheme="gray">{language}</Code>}
          <Button
            marginLeft="auto"
            colorScheme="green"
            height={6}
            padding={0}
            fontSize={12}
            textTransform="lowercase"
            onClick={() => navigator.clipboard.writeText(value)}
          >
            Copy
          </Button>
        </Flex>
        <SyntaxHighlighter
          language={language}
          style={dracula}
          children={value}
          showLineNumbers={false}
          wrapLongLines
        />
      </Box>
    );
  },
  link: ({ href, node }) => {
    return (
      <ChakraLink href={href} isExternal wordBreak="break-word">
        {node.children[0].value}
      </ChakraLink>
    );
  },
  heading: ({ node: { children }, level }) => {
    let head: { as: ElementType; size: HeadingProps["size"] } = {
      as: "h1",
      size: "2xl",
    };

    switch (level) {
      case 1:
        head = {
          as: "h1",
          size: "2xl",
        };
        break;
      case 2:
        head = {
          as: "h2",
          size: "xl",
        };
        break;
      case 3:
        head = {
          as: "h3",
          size: "lg",
        };
        break;
      case 4:
        head = {
          as: "h4",
          size: "md",
        };
        break;
      case 5:
        head = {
          as: "h5",
          size: "sm",
        };
        break;
      case 6:
        head = {
          as: "h6",
          size: "xs",
        };
        break;
      default:
        head = {
          as: "h1",
          size: "2xl",
        };
    }
    const router = useRouter();

    return (
      <Link
        href={`${router.asPath.split("#")[0]}#${children[0].value
          .split(" ")
          .join("-")
          .toLowerCase()}`}
        passHref
      >
        <Box _hover={{ textDecoration: "underline", cursor: "pointer" }}>
          <Heading
            as={head.as}
            size={head.size}
            marginY={4 + (7 - level) * 0.5}
            lineHeight={`${(7 - level) * 0.7}rem`}
            id={children[0].value.split(" ").join("-").toLowerCase()}
          >
            {children[0].value}
          </Heading>
        </Box>
      </Link>
    );
  },
};
