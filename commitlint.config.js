// https://commitlint.js.org/#/reference-configuration

/** @type {import('@commitlint/types').UserConfig} */
const CommitLintConfiguration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // https://commitlint.js.org/#/reference-rules?id=scope-enum
    "scope-enum": [
      2,
      "always",
      [
        "analytics",
        "blog",
        "components",
        "content",
        "helpers",
        "layout",
        "lib",
        "pages",
        "projects",
        "seo",
        "services",
        "static",
        "theme",
      ],
    ],
    // https://commitlint.js.org/#/reference-rules?id=scope-case
    "scope-case": [2, "always", "kebab-case"],
  },
};

module.exports = CommitLintConfiguration;
