module.exports = {
    testEnvironment: 'jsdom',
    testMatch: [
        // Comment out each test file one by one
        // '<rootDir>/src/test/**/*.{js,jsx,ts,tsx}',
        '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
      transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '\\.(css|less|scss|sass)$',
  ],

};
