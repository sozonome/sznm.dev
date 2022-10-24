---
title: Data Fetching
description: Fetch data with ease
published: true
date: 2022-10-24
stacks:
  - http-client
  - data-fetching
---

## Fetcher Utility

> install [axios](https://axios-http.com/)
```bash
yarn add axios
```

> add fetcher utility for GET
```ts
import axios from "axios";

export const fetcher = <ResType>(url: string, params?: any) =>
  axios.get<ResType>(url, { params }).then((res) => res.data);
```

## Data Hook with SWR

> install [SWR](https://swr.vercel.app)
```bash
yarn add swr
```

> add swr hook utility
```ts
import useSWR from "swr";

type UseAppSWRArgs<ResType> = {
  url: string;
  params?: any;
  fallbackData?: ResType;
  isReady?: boolean;
};

export const useAppSWR = <ResType, ErrorType = any>({
  url,
  params,
  fallbackData,
  isReady = true,
}: UseAppSWRArgs<ResType>) => {
  const { data, error, mutate } = useSWR<ResType, ErrorType>(
    isReady ? [url, params] : null,
    fetcher,
    {
      fallbackData,
    }
  );

  return {
    data,
    isLoading: !error && !data && isReady,
    isError: error,
    mutate,
  };
};
```

> add data hook
```ts
// useMovieData.ts
export const useMovieData = (params?: any) => useAppSWR({
  url: 'https://some-api-url.com/api/movies',
  params,
});
```

> call the data hook in the component
```tsx
// SomeComponent.tsx

const SomeComponent = () => {
  const { data, isLoading } = useMovieData();

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {data.results.map(item => <p>{item.title}</p>)}
    </div>
  )
}
```