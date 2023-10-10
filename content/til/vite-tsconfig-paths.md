---
title: vite-tsconfig-paths
description: resolve imports using TypeScript's path mapping.
date: 2023-10-11
published: true
tags:
  - vite
  - typescript
---

I used to manually define how to resolve import through vite config `resolve` even though I already define path mapping in `tsconfig.json`. By using this plugin, it will read the tsconfig path mapping.

References: https://www.npmjs.com/package/vite-tsconfig-paths
