import { Grid, Heading, Text } from "@chakra-ui/react";
import type { Snippet } from "contentlayer/generated";

type SnippetDetailHeadProps = {
  data: Snippet;
};

const SnippetDetailHead = ({ data }: SnippetDetailHeadProps) => {
  return (
    <Grid gap={2}>
      <Heading as="h1" size={{ base: "2xl", sm: "3xl", md: "4xl" }}>
        {data.title}
      </Heading>
      <Text color="gray.500">{data.description}</Text>
    </Grid>
  );
};

export default SnippetDetailHead;
