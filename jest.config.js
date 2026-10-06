export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },

  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.js",
  },

  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/e2e/"],
};
