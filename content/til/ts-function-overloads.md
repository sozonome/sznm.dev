---
title: 'TypeScript: Function Overloads'
description: specify a function that can be called in different ways and multiple return type
date: 2023-11-15
published: true
tags:
  - typescript
  - function
---

We can define multiple function declarations to define different signatures (parameters/return types) and TypeScript will infer the right signature based on call arguments.

Some gotchas:

- Implementation should narrow types based on overload
- Order matters: put most specific overloads first

Use Cases:

- Reusable functions with different types
- Library functions mimicking overloads
- Gradual typing - multiple signatures

Example:

```ts
// Overloads
function getString(opts: { fallback: string }): string;
function getString(opts: {}): string | undefined;

// Implementation
function getString(opts: {}): string | undefined {
  // ...
}

// Usage
const str1 = getString({ fallback: 'hello' }); // string
const str2 = getString({}); // string | undefined
```

References: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)
