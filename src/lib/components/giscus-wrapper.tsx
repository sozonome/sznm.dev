'use client';

import { useColorModeValue } from '@chakra-ui/react';
import type { GiscusProps } from '@giscus/react';
import Giscus from '@giscus/react';

type GiscusWrapperProps = Pick<GiscusProps, 'category' | 'categoryId'>;

export const GiscusWrapper = ({ category, categoryId }: GiscusWrapperProps) => {
  const giscusTheme: GiscusProps['theme'] = useColorModeValue('light', 'dark');

  return (
    <Giscus
      repo="sozonome/sznm.dev"
      repoId="MDEwOlJlcG9zaXRvcnkyNjY2Njk3MDg="
      mapping="pathname"
      category={category}
      categoryId={categoryId}
      reactionsEnabled="1"
      theme={giscusTheme}
      emitMetadata="0"
    />
  );
};
