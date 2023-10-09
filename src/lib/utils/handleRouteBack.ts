import type { useRouter as useAppRouter } from 'next/navigation';
import type { useRouter as usePageRouter } from 'next/router';

const replaceStrategies = ['push', 'replace'] as const;
type ReplaceStrategy = (typeof replaceStrategies)[number];

interface HandleRouteBackParams {
  router: ReturnType<typeof useAppRouter> | ReturnType<typeof usePageRouter>;
  to: string;
  replaceStrategy?: ReplaceStrategy;
}

export const handleRouteBack = ({
  router,
  to = '/',
  replaceStrategy = 'push',
}: HandleRouteBackParams) => {
  const requestedPath = `${window.location.protocol}//${window.location.host}${to}`;
  if (window.history.length > 2 && document.referrer === requestedPath) {
    router.back();
    return;
  }

  if (replaceStrategy === 'replace') {
    router.replace(to);
    return;
  }

  router.push(to);
};
