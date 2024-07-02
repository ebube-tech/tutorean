module.exports = {
  "extends": ["next/core-web-vitals", "prettier"],
  "plugins": ["unicorn", "simple-import-sort"],
  "rules": {
    "simple-import-sort/imports": 2,
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": true,
        "caughtErrors": "none"
      }
    ],
    "prefer-const": "error",
    "react-hooks/exhaustive-deps": "error"
  }
}


