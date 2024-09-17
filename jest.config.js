// jest.config.js

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/*.spec.ts'],
    transform: {
        '^.+\\.tsx?$':['ts-jest', {
        tsconfig: 'tsconfig.json',
      }]
    },
  };
  