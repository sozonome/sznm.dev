/** @type {import('@commitlint/types').UserConfig} */

const CommitLintConfiguration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [
      2,
      "always",
      [
        "blog",
        "components",
        "content",
        "helpers",
        "layout",
        "lib",
        "pages",
        "projects",
        "seo",
        "static",
        "theme",
      ],
    ],
    "scope-case": [2, "always", "kebab-case"],
  },
};

module.exports = CommitLintConfiguration;
