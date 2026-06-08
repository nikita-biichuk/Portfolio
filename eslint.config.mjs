import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    files: ["**/*.ts", "**/*.tsx"],

    plugins: {
      import: importPlugin,
      "unused-imports": unusedImports,
    },

    settings: {
      react: {
        version: "19.0",
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },

    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "unused-imports/no-unused-imports": "error",

      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
      "import/no-cycle": "error",
      "import/no-self-import": "error",
      "import/no-useless-path-segments": "error",

      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "@/features/*/ui/*",
                "@/features/*/api/*",
                "@/features/*/lib/*",
                "@/features/*/model/*",
                "@/features/*/config/*",
                "@/features/*/types/*",
              ],
              message: "Import from feature public API only (use index.ts).",
            },
            {
              group: [
                "@/entities/*/ui/*",
                "@/entities/*/api/*",
                "@/entities/*/lib/*",
                "@/entities/*/model/*",
                "@/entities/*/config/*",
                "@/entities/*/types/*",
              ],
              message: "Import from entity public API only (use index.ts).",
            },
            {
              group: ["@/shared/utils/*"],
              message: "Avoid dumping logic into shared/utils. Prefer feature/entity logic.",
            },
          ],
        },
      ],
    },
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
