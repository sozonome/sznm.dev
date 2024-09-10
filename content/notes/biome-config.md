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
  "$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
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
      "complexity": {
        "noExcessiveCognitiveComplexity": "error",
        "useSimplifiedLogicExpression": "error",
        "noVoid": "warn"
      },
      "correctness": {
        "noUnusedImports": "error",
        "noUnusedVariables": "error",
        "useHookAtTopLevel": "error"
      },
      "nursery": {
        "noConsole": "error",
        "noDuplicateElseIf": "error",
        "noDuplicateJsonKeys": "error",
        "noUnusedFunctionParameters": "error",
        "noUselessStringConcat": "error",
        "noUselessUndefinedInitialization": "error",
        "useDefaultSwitchClause": "error",
        "useSemanticElements": "error",
        "useTopLevelRegex": "error"
      },
      "performance": {
        "noBarrelFile": "error"
      },
      "style": {
        "noDefaultExport": "error",
        "useBlockStatements": "error",
        "useCollapsedElseIf": "error",
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
      "include": ["src/lib/views/**/index.*", "src/lib/views/**/index.*", "src/app/**/*", "*.ts"],
      "linter": {
        "rules": {
          "style": {
            "noDefaultExport": "off"
          }
        }
      }
    },
    {
      "include": ["src/app/**/*"],
      "linter": {
        "rules": {
          "performance": {
            "noBarrelFile": "off"
          }
        }
      }
    }
  ]
}

```