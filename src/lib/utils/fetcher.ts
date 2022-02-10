export const fetcher = <Res = unknown>(
  input: RequestInfo,
  init?: RequestInit
): Promise<Res> => fetch(input, init).then((res) => res.json());
