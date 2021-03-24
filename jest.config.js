const { pathsToModuleNameMapper } = require('ts-jest/utils');
/**
 * @type {import('./tsconfig.json')}
 */
const { compilerOptions } = require('./tsconfig.json');

const tsconfigPaths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
});

/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: 'ts-jest',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/test/test.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.ts',
    ...tsconfigPaths,
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/.next',
    '<rootDir>/out',
  ],
  transform: { '^.+\\.[jt]sx?$': 'babel-jest' },
  transformIgnorePatterns: [
    '/node_modules/',
    '\\.pnp\\.[^\\/]+$',
    '\\.(css|sass|scss)$',
  ],
  globals: {
    'ts-jest': {},
  },
};
