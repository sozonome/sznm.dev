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
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => {
    if (trackView) {
      incrementViews(slug);
    }
  }, []);

  return (
    <Text fontSize={fontSize} as={as}>{`${(
      count ?? 0
    ).toLocaleString()} views`}</Text>
  );
};

export default ViewCounter;
