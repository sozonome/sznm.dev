import type { SWRResponse } from "swr";

export type SWRHookResponse<DataType, ErrorType = boolean> = {
  isLoading: boolean;
  data?: DataType;
  isError?: ErrorType;
  mutate: SWRResponse<DataType, ErrorType>["mutate"];
};
