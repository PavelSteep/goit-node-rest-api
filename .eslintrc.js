module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["standard", "prettier"],
  plugins: ["import", "node", "promise"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-console": "warn",
    "no-unused-vars": "warn",
    "prettier/prettier": "error",
  },
};
