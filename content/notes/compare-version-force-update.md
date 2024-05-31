---
title: Force Update - Compare Version
description: compare version to check should force update or not
published: true
date: 2024-05-31
tags:
  - javascript
  - typescript
  - app
---

A utility to check whether we should prompt force update or not

```ts
type ShouldForceUpdateParams = {
  currentVersion: string; 
  minVersion: string;
}

const shouldForceUpdate = ({ currentVersion, minVersion }: ShouldForceUpdateParams) => {
  return minVersion.localeCompare(
    currentVersion, 
    undefined, 
    { 
      numeric: true, 
      sensitivity: 'case' 
    }
  ) > 0;
}
```
