// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      reporter: ["text", "html"],
      include: ["src/lib/utils/**"],
      // include: ["src/lib/{utils,components}/**"] when more than 1 folder
      // exclude: [".next/**"],
      all: true,
    },
  },
});
