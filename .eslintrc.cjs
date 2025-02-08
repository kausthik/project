module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    quotes: ['off', 'double'],
    'no-console': 0,
    'max-len': 0, // for comments length
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    "react/prop-types": "off",
    "react/no-array-index-key": "off",
  },
};
