import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
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
        gap={4}
        padding={8}
        height="full"
        borderWidth={2}
        borderRadius={24}
      >
        <Grid gap={2}>
          <Heading size="md">{data.title}</Heading>
          <Text fontSize="sm">{data.description}</Text>
        </Grid>

        <Flex gap={2}>
          {data.stacks?.map((stack) => (
            <Text
              borderWidth={1}
              paddingY={0.5}
              paddingX={2}
              borderRadius={12}
              fontSize="xs"
              color="teal.500"
            >
              {stack}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Link>
  );
};

export default SnippetCard;
