import { Flex, Grid, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import type { Snippet } from "contentlayer/generated";
import Link from "next/link";

import { EVENT_TYPE_NAVIGATE } from "lib/constants/tracking";
import { trackEvent } from "lib/utils/trackEvent";

type SnippetCardProps = {
  data: Snippet;
};

const SnippetCard = ({ data }: SnippetCardProps) => {
  const backgroundColor = useColorModeValue("", "gray.700");

  const handleClickSnippet = () => {
    trackEvent({
      eventName: `Snippet: ${data.title}`,
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  };

  return (
    <Flex
      direction="column"
      as={Link}
      href={`/snippets/${data.id}`}
      gap={4}
      padding={8}
      height="full"
      borderWidth={2}
      borderRadius={24}
      borderColor="cardBorder"
      onClick={handleClickSnippet}
      transition="0.2s ease-out"
      role="group"
      _hover={{
        shadow: "lg",
        borderColor: "cardHoverBorder",
        borderWidth: 2,
        backgroundColor,
      }}
    >
      <Grid gap={2}>
        <Heading size="md">{data.title}</Heading>
        <Text fontSize="sm" color="description">
          {data.description}
        </Text>
      </Grid>

      <Flex gap={2}>
        {data.stacks?.map((stack) => (
          <Text
            borderWidth={1}
            paddingY={0.5}
            paddingX={2}
            borderRadius={12}
            transition="0.2s ease-out"
            _groupHover={{
              color: "teal.400",
            }}
            fontSize="xs"
            color="teal"
            key={stack}
          >
            {stack}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default SnippetCard;
