---
title: React Function Component Definition Rule
description: How to enforce consistent function type for function components.
published: true
date: 2021-10-17
tags:
  - react
  - eslint
---

Example to force using arrow function when defining named components

```js
// .eslintrc.js
{
  ...,
  "rules": {
    ...,
    "react/function-component-definition": [2, {
      "namedComponents": ["arrow-function"],
    }]
  }
}
```

References: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
