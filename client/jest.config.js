// jest.config.js
module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js', // Ignore image files
       "^Hall-Booking-Management/client/src/(.*)$": "<rootDir>/src/$1"
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  };
  