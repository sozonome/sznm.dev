---
title: Show Installed Global Node Deps
description: How to show installed global npm / yarn / pnpm dependencies
published: true
date: 2023-02-10
tags:
  - node
  - pnpm
  - npm
  - yarn
---

To check node dependencies which are installed globally.

## pnpm

```bash
pnpm list -g --depth 0
```

references:

- https://pnpm.io/pnpm-cli
- https://pnpm.io/cli/list#--global--g

## npm

```bash
npm list -g --depth=0
```

references: https://docs.npmjs.com/cli/v9/commands/npm-ls#global

## Yarn

```bash
yarn global list
```

references: https://classic.yarnpkg.com/en/docs/cli/global
