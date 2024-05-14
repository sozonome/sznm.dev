---
title: 'Expo Env Load Behavior'
description: behavior on how Expo load env on dev server, EAS Build, and EAS Updates
date: 2024-04-30
published: true
tags:
  - mobile
  - react-native
  - expo
---

Expo has different behavior on how it loads env variables on dev server, EAS Build, and EAS Updates

- On dev server and EAS Updates, by default it will load `.env`
- On EAS Build (unless we upload `.env` to EAS Build or exclude .env* from .gitignore), it's recommended to define it in `eas.json`
- To make sure EAS Updates load the desired env:
  1. Define `NODE_ENV` and `.env.${ENVIRONMENT_NAME}`. For example we want to use `.env.production`:
  2. Add `--clear-cache` to make sure it load the most fresh value
    ```bash
    npx cross-env NODE_ENV=production eas update --channel production --message "fix issues"
    ```
    - references: https://github.com/expo/eas-cli/issues/2174#issuecomment-2053109651

References:
- https://docs.expo.dev/guides/environment-variables/
  - https://docs.expo.dev/build-reference/variables/#can-eas-build-use-env-files
  - https://docs.expo.dev/eas-update/environment-variables/#using-env-files-with-eas-update