import useSWR from 'swr';

import { fetcher } from '~/lib/utils/fetcher';

export const useGetAPI = <ResType>({
  path,
  fallbackData,
}: {
  path: string;
  fallbackData?: ResType;
}) => {
  const { data, isLoading, isValidating, error, mutate } = useSWR<ResType>(
    path,
    fetcher,
    {
      fallbackData,
    }
  );

  return {
    data,
    isLoading,
    isValidating,
    isError: error,
    mutate,
  };
};
