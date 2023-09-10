'use client';

import type { TextProps } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import React from 'react';

import { incrementViews } from '~/app/actions';

export type ViewCounterProps = {
  count: number | null;
  slug: string;
  trackView?: boolean;
} & Pick<TextProps, 'fontSize' | 'as'>;

const ViewCounter = ({
  count,
  slug,
  trackView,
  fontSize,
  as,
}: ViewCounterProps) => {
  React.useEffect(() => {
    if (trackView) {
      incrementViews(slug);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Text fontSize={fontSize} as={as}>{`${(
      count ?? 0
    ).toLocaleString()} views`}</Text>
  );
};

export default ViewCounter;
