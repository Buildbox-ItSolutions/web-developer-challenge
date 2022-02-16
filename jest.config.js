// eslint-disable-next-line no-undef
module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTest.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{tsx}',
    '!src/**/*.spec.{tsx}',
    '!**/node_modules/**',
    '!src/**/_aop.{tsx}',
    '!src/**/_document.{tsx}',
  ],
  coverageReporters: ['clover', 'json', 'lcov'],
};
