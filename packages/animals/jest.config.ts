export default {
  displayName: '@tuskdesign/animals',
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/packages/animals',
  transform: {},
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageReporters: ['lcov'],
  setupFilesAfterEnv: ['./jest.setup.ts']
};
