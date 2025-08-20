module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-native/all",
    "prettier", // disables ESLint rules that conflict with Prettier
  ],
  plugins: ["react", "react-hooks", "react-native", "prettier"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    "react-native/react-native": true,
  },
  rules: {
    "prettier/prettier": "error", // Prettier errors show as ESLint errors
    "react/react-in-jsx-scope": "off", // not needed in React 17+
  },
};
