import useSWR from "swr";

import { fetcher } from "lib/utils/fetcher";

export const useSpotifySWR = <ResType>(path: string) => {
  const { data, error, mutate } = useSWR<ResType>(path, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
