/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    // https://github.com/sozonome/eslint-config-sznm#readme
    "sznm/react",
    // https://github.com/sozonome/eslint-config-sznm#-nextjs-projects
    "plugin:react/jsx-runtime",
    "plugin:@next/next/recommended",
  ],
};
