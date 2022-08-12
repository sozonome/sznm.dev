import { Grid, Heading, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import MotionBox from "lib/components/motion/MotionBox";
import MotionGrid from "lib/components/motion/MotionGrid";
import SnippetCard from "lib/components/snippets/SnippetCard";
import {
  childAnimationProps,
  staggerAnimationProps,
} from "lib/constants/animation";
import { baseUrl } from "lib/constants/baseUrl";
import { sznmOgImage } from "lib/utils/sznmOgImage";

import type { SnippetListProps } from "./types";

const SnippetList = ({ snippets }: SnippetListProps) => {
  return (
    <Grid gap={12}>
      <NextSeo
        title="Snippets"
        canonical={`${baseUrl}/snippets`}
        openGraph={{
          title: "Snippets | sozonome",
          images: [
            {
              url: sznmOgImage({
                heading: "Snippets | sozonome",
                text: "https://sznm.dev",
              }),
              alt: "Snippets | sozonome og-image",
            },
          ],
        }}
      />

      <Grid gap={2}>
        <Heading>Snippets</Heading>
        <Text color="description">
          A collection of my personal snippets I use throughout my projects
        </Text>
      </Grid>

      <MotionGrid
        {...staggerAnimationProps}
        gap={6}
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      >
        {snippets.map((item) => (
          <MotionBox {...childAnimationProps} key={item.id}>
            <SnippetCard data={item} />
          </MotionBox>
        ))}
      </MotionGrid>
    </Grid>
  );
};

export default SnippetList;
