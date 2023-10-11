---
title: Zod refine or superRefine check
description: refine and superRefine check run after there's no invalid type error anymore in the base schema.
date: 2023-07-28
published: true
tags:
  - zod
  - typescript
---

I sometimes got stuck when doing validations through `refine` or `superRefine`. Turns out `refine` and `superRefine` checking is run after there's no more invalid type error on the base schema. It's kinda expected but idk why is this not documented well.
