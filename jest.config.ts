import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.ts",
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png)$": "<rootDir>/assetsTransformer.js"
  },
};
export default config;
