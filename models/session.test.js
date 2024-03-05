import mongoose from 'mongoose';
import SessionModel from './session';

describe('SessionModel', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should define a valid schema', () => {
    // Arrange
    const sampleSessionData = {
      sessionID: 'abc123',
      userID: 'user123',
      token: 'sampleToken123',
      expirationTime: new Date(),
    };

    // Act
    const session = new SessionModel(sampleSessionData);

    // Assert
    expect(session.validateSync()).toBeUndefined();
  });

  it('should reject session with invalid sessionID', () => {
    // Arrange
    const sessionData = {
      sessionID: '', // Invalid sessionID
      userID: 'user123',
      token: 'sampleToken123',
      expirationTime: new Date(),
    };

    // Act
    const session = new SessionModel(sessionData);
    const validationError = session.validateSync();

    // Assert
    if (validationError) {
      expect(validationError.errors['sessionID']).toBeDefined();
    } else {
      // Throw an error if validationError is undefined
      throw new Error('Validation error expected but not received');
    }
  });

  it('should reject session with invalid userID', () => {
    // Arrange
    const sessionData = {
      sessionID: 'abc123',
      userID: '', // Invalid userID
      token: 'sampleToken123',
      expirationTime: new Date(),
    };

    // Act
    const session = new SessionModel(sessionData);
    const validationError = session.validateSync();

    // Assert
    if (validationError) {
      expect(validationError.errors['userID']).toBeDefined();
    } else {
      // Throw an error if validationError is undefined
      throw new Error('Validation error expected but not received');
    }
  });

});
