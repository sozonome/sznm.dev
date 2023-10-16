---
title: Jest Path Mapping
description: How to configure jest so it able to transform the mapping from tsconfig
published: true
date: 2023-10-16
tags:
  - jest
  - typescript
---

To enable absolute path import in our test files, we need to configure it first. `ts-jest` provides a helper to transform the mapping from `tsconfig`.

```js
// jest.config.js
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // [...]
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src', // this might depend on your tsconfig configuration
  }),
};
```

References / Further Guide: https://kulshekhar.github.io/ts-jest/docs/getting-started/paths-mapping
