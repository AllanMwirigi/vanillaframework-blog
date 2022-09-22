/** @type {import('jest').Config} */
const config = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.ts',
    '\\.(css|less|scss)$': '<rootDir>/src/__mocks__/styleMock.ts',
  },
};

module.exports = config;
