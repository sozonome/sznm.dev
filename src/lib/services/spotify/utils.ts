import useSWR from "swr";

import type { SWRHookResponse } from "lib/types/SWRHook";
import { fetcher } from "lib/utils/fetcher";

export const useSpotifySWR = <ResType>(
  path: string
): SWRHookResponse<ResType> => {
  const { data, error, mutate } = useSWR<ResType>(path, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
