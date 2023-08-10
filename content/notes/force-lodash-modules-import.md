---
title: Force Lodash Import Scope
description: How to enforce lodash import scope
published: true
date: 2023-06-30
tags:
  - lodash
  - eslint
---

## Importing Lodash

There are multiple ways to import lodash utilities.

```ts
// whole import
import _ from 'lodash';
// _.debounce();

// curly bracket / named import
import { debounce } from 'lodash';

// one-by-one / modules / single method import
import debounce from 'lodash/debounce';
```

One of the recommended way to import it is `one-by-one` or modules or `single method` import as it will produces smallest bundle size.

## Enforce Lodash Import Method

How about if our project is:

1. maintained by multiple people, or
2. we have various parts in our code which utilize lodash

and we want to enforce specific way to import lodash methods?

We can use eslint and there's an eslint plugin for it: [`eslint-plugin-lodash`](https://www.npmjs.com/package/eslint-plugin-lodash). This plugin has a rule named `import-scope`. Here's how to configure it:

```bash
pnpm i -D eslint eslint-plugin-lodash
```

```js
// .eslintrc.js
/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['lodash'],
  rules: {
    'lodash/import-scope': [
      'error',
      'method' /** 'method' | 'member' | 'full' | 'method-package' */,
    ],
  },
};
```

With this configuration, eslint will warns us when we import lodash methods using other than the preferred import scope.

### References:

- https://www.blazemeter.com/blog/import-lodash-libraries
- https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/import-scope.md
