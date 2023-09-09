import ViewCounter from '~/lib/components/shared/ViewCounter';
import { getViewCount } from '~/lib/services/db/views';

type DetailViewCountsProps = {
  slug: string;
};

const DetailViewCounts = async ({ slug }: DetailViewCountsProps) => {
  const viewCount = await getViewCount(slug);

  return <ViewCounter slug={slug} count={viewCount} trackView />;
};

export default DetailViewCounts;
