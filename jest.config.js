module.exports = {
  "jest": {
    "testMatch": [
      "<rootDir>/test/**/*.test.js"
    ]
  },
  "reporters": [
    "default",
    ["jest-html-reporter", {
      "pageTitle": "Test Report"
    }]
  ]
};
