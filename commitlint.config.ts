/**
 * https://commitlint.js.org/reference/rules-configuration.html
 * https://commitlint.js.org/reference/rules.html
 */

import { RuleConfigSeverity, type UserConfig } from '@commitlint/types';

const commitLintConfiguration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    //https://commitlint.js.org/reference/rules.html#scope-case
    'scope-case': [RuleConfigSeverity.Error, 'always', 'kebab-case'],
    // https://commitlint.js.org/reference/rules.html#scope-enum
    'scope-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'accessibility',
        'analytics',
        'api',
        'app',
        'blog',
        'components',
        'content',
        'cmd',
        'layout',
        'lib',
        'markdown',
        'middleware',
        'monitoring',
        'notes',
        'pages',
        'projects',
        'seo',
        'services',
        'static',
        'theme',
        'til',
        'utils',
      ],
    ],
  },
};

export default commitLintConfiguration;
