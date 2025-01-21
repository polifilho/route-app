module.exports = {
    transform: {
      '^.+\\.tsx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  };
  