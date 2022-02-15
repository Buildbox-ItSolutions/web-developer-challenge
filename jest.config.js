// eslint-disable-next-line no-undef
module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{tsx}',
    '!src/**/*.spec.{tsx}',
    '!**/node_modules/**',
    '!src/**/_aop.{tsx}',
    '!src/**/_document.{tsx}',
  ],
  coverageReporters: ['clover', 'json', 'lcov'],
};
