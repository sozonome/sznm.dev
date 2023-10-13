import { Divider, Grid, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

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
      <Heading>Today I Learned</Heading>
      <MotionGrid {...staggerAnimationProps} gap={12}>
        {sortedTodayILearns.map((til, index) => (
          <MotionGrid {...childAnimationProps} gap={12} key={til.id}>
            <Grid
              gridTemplateColumns={{ base: '1fr', md: '1fr 2fr' }}
              gap={8}
              alignItems="start"
            >
              <Grid
                gap={{ base: 1, md: 2 }}
                position={{ md: 'sticky' }}
                top={24}
                marginTop={2}
              >
                <Link href={`#${til.id}`}>
                  <Heading size="md" id={til.id} scrollMarginTop={24}>
                    <Balancer>{til.title}</Balancer>
                  </Heading>
                </Link>
                {til.description ? (
                  <Text fontSize="sm" color="gray">
                    <Balancer>{til.description}</Balancer>
                  </Text>
                ) : null}
                <Text fontSize="xs" color="gray">
                  {dateFormatLong(til.date)}
                </Text>
              </Grid>

              <MarkdownContent rawContent={til.body.raw} />
            </Grid>
            {index !== sortedTodayILearns.length - 1 ? (
              <Divider color="gray" />
            ) : null}
          </MotionGrid>
        ))}
      </MotionGrid>
    </Grid>
  );
};

export default TodayILearnPage;
