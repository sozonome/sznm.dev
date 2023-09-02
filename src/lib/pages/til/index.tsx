import { Divider, Grid, Heading, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import MarkdownContent from '~/lib/components/shared/MarkdownContent';
import { sortedTodayILearns } from '~/lib/constants/til';
import { dateFormatLong } from '~/lib/utils/dateFormat';

const TodayILearnPage = () => {
  return (
    <Grid gap={8} scrollBehavior="smooth">
      <Heading>Today I Learn</Heading>
      <Grid gap={12}>
        {sortedTodayILearns.map((til, index) => (
          <React.Fragment key={til.id}>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={4}
              alignItems="start"
            >
              <Grid
                gap={{ base: 1, md: 2 }}
                minWidth={240}
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

              {til.body.raw}

              <MarkdownContent rawContent={til.body.raw} />
            </Stack>
            {index !== sortedTodayILearns.length - 1 ? (
              <Divider color="gray" />
            ) : null}
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );
};

export default TodayILearnPage;
