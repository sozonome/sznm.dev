/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['no-relative-import-paths'],
  extends: [
    // https://github.com/sozonome/eslint-config-sznm#readme
    'sznm/react',
    // https://github.com/sozonome/eslint-config-sznm#-nextjs-projects
    'plugin:react/jsx-runtime',
    'plugin:@next/next/recommended',
  ],
  rules: {
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      {
        allowSameFolder: true,
        rootDir: 'src',
        prefix: '~',
      },
    ],
  },
};
