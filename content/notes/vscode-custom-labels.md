---
title: VSCode Custom Label
description: customize display label for editor tabs and even quick search
date: 2024-05-01
published: true
tags:
  - vscode
---

Example:

```json
// .vscode/settings.json
{
  "workbench.editor.customLabels.patterns": {
    "**/lib/**/index.{ts,tsx}": "${dirname}",
    "**/lib/views/**/index.{ts,tsx}": "${dirname} - Page",
    "**/lib/components/**/index.{ts,tsx}": "${dirname} - Component"
  }
}
```

References: 
- https://x.com/nextjs/status/1783508313113800930
- https://code.visualstudio.com/docs/getstarted/userinterface#_customize-tab-labels
- https://code.visualstudio.com/updates/v1_88#_custom-labels-for-open-editors 