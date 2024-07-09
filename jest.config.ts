module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  roots: ["<rootDir>/src/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss|less)$": "identity-obj-proxy",
    "^.+\\.(css|sass|scss|less)$": "<rootDir>/__mocks__/styleMock.js",
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg|ttf|woff|woff2)$": `<rootDir>/__mocks__/fileMock.js`,
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  verbose: true,
  testTimeout: 30000,
}
