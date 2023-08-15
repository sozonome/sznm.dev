---
title: App Folder Structure
description: How I usually structure my app folder
published: true
date: 2022-10-22
tags:
  - app
  - foldering
  - structure
---

## Folder Structure

```bash
- src
  - app/pages/routes
  - lib
    - components
      - ui/shared
      - [domain/feature]
    - constants
    - hooks
    - layouts
    - services/repository
    - stores
    - styles
    - types/models
    - utils
```

### lib

`lib` is where all the application building block lives. I like to separate building blocks from framework specific folders (app / pages).

#### components

`components` is where the UI building block lives. Sometimes I separate it further into shared and scope specific.

#### constants

all reusable or root level constants are maintained through this folder.

#### hooks

`hooks` is where I put reusable or page specific hooks. Sometimes I put it inside `hooks` folder, sometimes I put it under `components` if the hook is component specific.

#### layouts

where I put the app root or reusable layouts / page wrappers.

#### services

where I put services code (data fetching, API / third party integrations, etc). Sometimes I name the folder `repository`

#### stores

where I maintain global stores

#### styles

where I put root / global level styling / theme files.

#### types

where I maintain global / shared typings / schemas used across the app. Sometimes I name this folder `models`

#### utils

where I put all reusable utilities.
