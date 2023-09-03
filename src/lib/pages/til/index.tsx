import { Divider, Grid, Heading, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

import MotionBox from '~/lib/components/motion/MotionBox';
import MotionGrid from '~/lib/components/motion/MotionGrid';
import MarkdownContent from '~/lib/components/shared/MarkdownContent';
import {
  childAnimationProps,
  staggerAnimationProps,
} from '~/lib/constants/animation';
import { sortedTodayILearns } from '~/lib/constants/til';
import { dateFormatLong } from '~/lib/utils/dateFormat';

const TodayILearnPage = () => {
  return (
    <Grid gap={8} scrollBehavior="smooth">
      <Heading>Today I Learn</Heading>
      <MotionGrid {...staggerAnimationProps} gap={12}>
        {sortedTodayILearns.map((til, index) => (
          <MotionBox {...childAnimationProps} key={til.id}>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={4}
              alignItems="start"
            >
              <Grid
                gap={{ base: 1, md: 2 }}
                width={240}
                position={{ md: 'sticky' }}
                top={24}
                marginTop={2}
              >
                <Link href={`#${til.id}`}>
                  <Heading size="md" id={til.id} scrollMarginTop={24}>
                    {til.title}
                  </Heading>
                </Link>
                {til.description ? (
                  <Text fontSize="sm" color="gray">
                    {til.description}
                  </Text>
                ) : null}
                <Text fontSize="xs" color="gray">
                  {dateFormatLong(til.date)}
                </Text>
              </Grid>

              <MarkdownContent rawContent={til.body.raw} />
            </Stack>
            {index !== sortedTodayILearns.length - 1 ? (
              <Divider color="gray" />
            ) : null}
          </MotionBox>
        ))}
      </MotionGrid>
    </Grid>
  );
};

export default TodayILearnPage;
