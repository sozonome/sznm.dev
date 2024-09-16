---
title: Biome Config
description: My personal biome configuration
published: true
date: 2024-09-10
tags:
  - config
  - biome
---

```json
// biome.json
{
  "$schema": "https://biomejs.dev/schemas/1.9.1/schema.json",
  "organizeImports": {
    "enabled": true
  },
  "formatter": {
    "indentStyle": "space"
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "a11y": {
        "useSemanticElements": "error"
      },
      "complexity": {
        "noExcessiveCognitiveComplexity": "error",
        "noUselessStringConcat": "error",
        "noUselessUndefinedInitialization": "error",
        "useSimplifiedLogicExpression": "error",
        "noVoid": "warn"
      },
      "correctness": {
        "noUnusedImports": "error",
        "noUnusedVariables": "error",
        "noUnusedFunctionParameters": "error",
        "useHookAtTopLevel": "error"
      },
      "nursery": {
        "noDuplicateElseIf": "error"
      },
      "performance": {
        "noBarrelFile": "error",
        "useTopLevelRegex": "error"
      },
      "style": {
        "noDefaultExport": "error",
        "useBlockStatements": "error",
        "useCollapsedElseIf": "error",
        "useDefaultSwitchClause": "error",
        "useConsistentArrayType": {
          "level": "error",
          "options": {
            "syntax": "generic"
          }
        },
        "useFilenamingConvention": {
          "level": "error",
          "options": {
            "filenameCases": ["kebab-case"]
          }
        }
      },
      "suspicious": {
        "noConsole": "error",
        "noConsoleLog": "error",
        "noEmptyBlockStatements": "error",
        "useAwait": "error"
      }
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "single"
    }
  },
  "overrides": [
    {
      "include": ["src/lib/pages/**/*", "*.ts"],
      "linter": {
        "rules": {
          "style": {
            "noDefaultExport": "off"
          }
        }
      }
    }
  ]
}

```