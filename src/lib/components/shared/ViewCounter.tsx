'use client';

import { Text } from '@chakra-ui/react';
import React from 'react';

import { incrementViews } from '~/app/actions';

type ViewCounterProps = {
  count: number | null;
  slug: string;
  trackView?: boolean;
};

const ViewCounter = ({ count, slug, trackView }: ViewCounterProps) => {
  React.useEffect(() => {
    if (trackView) {
      incrementViews(slug);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Text>{`${(count ?? 0).toLocaleString()} views`}</Text>;
};

export default ViewCounter;
