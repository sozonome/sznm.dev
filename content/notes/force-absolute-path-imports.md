---
title: Force Absolute Path Import
description: How to enforce absolute path import
published: true
date: 2023-10-16
tags:
  - import
  - eslint
---

We can configure our projects to use absolute path import. Hence, defining it only enables the absolute path import. It doesn't automatically enforce us to use absolute path import. Relative import will still works. How to make sure everyone working on the same project adheres to always use absolute path import? There must be a way to automate this checking and fix it.

Luckily, there's already an eslint plugin for that: [`eslint-plugin-no-relative-import-paths`](https://www.npmjs.com/package/eslint-plugin-no-relative-import-paths) by [MelvinVermeer](https://github.com/MelvinVermeer).

Install the plugin package:

```bash
pnpm i -D eslint-plugin-no-relative-import-paths
```

Add it to eslint config:

```js
// eslint.config.js
/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['no-relative-import-paths'], // add to plugins
  ...,
  rules: {
    ...,
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      {
        allowSameFolder: true,
        rootDir: 'src',
        prefix: '@' // this might be different depending on your tsconfig / jsconfig configuration
      },
    ],
  },
  ...,
}
```

Related:

- [Jest Absolute Path Import](/notes/jest-path-mapping)
