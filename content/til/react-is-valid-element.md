---
title: 'React isValidElement'
description: to check whether a value is React Element
date: 2024-02-06
published: true
tags:
  - react
---

```ts
import * as React from 'react';

type SomeComponentProps = {
  description: React.ReactNode;
}

const ComponentProps = ({ description }: SomeComponentProps) => {
  if (React.isValidElement(description)) {
    return description;
  }

  return (<Paragraph>{description}</Paragraph>);
}
```

References: https://react.dev/reference/react/isValidElement
