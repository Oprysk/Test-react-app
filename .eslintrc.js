module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "no-useless-escape": 0,
    "no-console": 2
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: {
        browser: true,
        node: true,
        es6: true
      },
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier/@typescript-eslint"
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module",
        project: "./tsconfig.json"
      },
      plugins: ["react", "react-hooks", "@typescript-eslint"],
      settings: {
        react: {
          version: "detect"
        }
      },
      rules: {
        "@typescript-eslint/no-inferrable-types": 0,
        "@typescript-eslint/interface-name-prefix": [2, "always"],
        "@typescript-eslint/typedef": [
          2,
          {
            arrayDestructuring: true,
            objectDestructuring: true
          }
        ],
        "@typescript-eslint/array-type": [1, { default: "array-simple" }],
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/unbound-method": 0,
        "no-useless-escape": 0,
        "no-console": 2,
        "react-hooks/rules-of-hooks": 2,
        "react-hooks/exhaustive-deps": 1
      }
    }
  ]
};
