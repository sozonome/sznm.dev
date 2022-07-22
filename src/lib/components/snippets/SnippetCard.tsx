import { Flex, Heading, Text } from "@chakra-ui/react";
import type { Snippet } from "contentlayer/generated";
import Link from "next/link";

type SnippetCardProps = {
  data: Snippet;
};

const SnippetCard = ({ data }: SnippetCardProps) => {
  return (
    <Link href={`/snippets/${data.id}`} passHref>
      <Flex
        direction="column"
        as="a"
        gap={2}
        padding={8}
        height="full"
        borderWidth={2}
        borderRadius={24}
      >
        <Heading size="md">{data.title}</Heading>
        <Text fontSize="sm">{data.description}</Text>
      </Flex>
    </Link>
  );
};

export default SnippetCard;
