import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

import importPlugin from "eslint-plugin-import-x";
import unusedImports from "eslint-plugin-unused-imports";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  // Override react.version after the Next.js spreads — eslint-config-next sets "detect" which
  // calls context.getFilename(), an API removed in ESLint 10. Pinning to "19.0" skips that call.
  {
    settings: {
      react: { version: "19.0" },
    },
  },

  {
    files: ["**/*.ts", "**/*.tsx"],

    plugins: {
      "import-x": importPlugin,
      "unused-imports": unusedImports,
    },

    settings: {
      "import-x/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },

    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "unused-imports/no-unused-imports": "error",

      "import-x/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
      "import-x/no-cycle": "error",
      "import-x/no-self-import": "error",
      "import-x/no-useless-path-segments": "error",

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
