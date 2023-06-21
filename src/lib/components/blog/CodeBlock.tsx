import {
  Box,
  Button,
  Code,
  createStandaloneToast,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import type { CodeProps } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  dracula,
  oneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';

const { toast } = createStandaloneToast();

const handleClickCopy = (childrenValue: string) => async () => {
  const toastId = childrenValue.substring(0, 10);

  await navigator.clipboard.writeText(childrenValue);
  if (!toast.isActive(toastId)) {
    toast({
      id: toastId,
      status: 'success',
      position: 'top-right',
      title: 'Copied',
      isClosable: true,
    });
  }
};

const CodeBlock = ({ inline, className, children, ...props }: CodeProps) => {
  /** https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight */
  const match = /language-(\w+)/.exec(className || '');
  const language = match?.[1];
  const childrenValue = String(children).replace(/\n$/, '');
  const themes = useColorModeValue(oneLight, dracula);

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
          onClick={handleClickCopy(childrenValue)}
        >
          Copy
        </Button>
      </Flex>
      <SyntaxHighlighter
        language={language}
        style={themes}
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
};

export default CodeBlock;
