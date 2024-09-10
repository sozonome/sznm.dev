import { getViewCount } from '~/lib/services/db/views';

import { ViewCounter, type ViewCounterProps } from './view-counter';

type DetailViewCountsProps = Pick<ViewCounterProps, 'slug' | 'fontSize' | 'as'>;

export const DetailViewCounts = async (props: DetailViewCountsProps) => {
  const { slug } = props;
  const viewCount = await getViewCount(slug);

  return <ViewCounter {...props} count={viewCount} trackView />;
};
