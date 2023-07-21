// https://commitlint.js.org/#/reference-configuration

/** @type {import('@commitlint/types').UserConfig} */
const CommitLintConfiguration = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // https://commitlint.js.org/#/reference-rules?id=scope-enum
    'scope-enum': [
      2,
      'always',
      [
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
        'monitoring',
        'notes',
        'pages',
        'projects',
        'seo',
        'services',
        'static',
        'theme',
        'utils',
      ],
    ],
    // https://commitlint.js.org/#/reference-rules?id=scope-case
    'scope-case': [2, 'always', 'kebab-case'],
  },
};

module.exports = CommitLintConfiguration;
