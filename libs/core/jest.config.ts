import { Config } from 'jest';

export default {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: ['node_modules/(?!(spacetime)/)'],
} as Config;
