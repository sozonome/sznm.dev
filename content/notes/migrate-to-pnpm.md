---
title: Migrate to PNPM
description: Guide on how to migrate to pnpm easily
published: true
date: 2023-08-22
tags:
  - pnpm
---

- It's recommended to use corepack, add this to `package.json`
  ```json
    ...,
    "engines": {
      "node": ">=20.x",
      "pnpm": ">=8"
    }
  ```
- Run `pnpm import`
- Remove `package-lock.json` or `yarn.lock` file
- (If you have pre-install or post-install script) Add `.npmrc` containing:

  ```
  enable-pre-post-scripts=true
  ```

- Add `.pnpm-debug.log*` to `.gitignore` file
- Replace `npm run` or `yarn` command with `pnpm`
