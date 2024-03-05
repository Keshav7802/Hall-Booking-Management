import mongoose from 'mongoose';
import UserModel from './user';

describe('UserModel', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a valid user with all fields provided', () => {
    const validUserData = {
      name: 123,
      username: 'john_doe',
      password: 'password123',
      userType: 'Student',
    };

    const user = new UserModel(validUserData);

    expect(user.validateSync()).toBeUndefined();
  });

  it('should reject a user with invalid name (not a string)', () => {
    const invalidUserData = {
      name: 'moni', // Invalid name
      username: 'john_doe',
      password: 'password123',
      userType: 'Student',
    };

    const user = new UserModel(invalidUserData);

    expect(user.validateSync().errors['name']).toBeDefined();
  });

  it('should reject a user with invalid username (not a string)', () => {
    const invalidUserData = {
      name: 123,
      username: ['123'], // Invalid username
      password: 'password123',
      userType: 'Student',
    };

    const user = new UserModel(invalidUserData);

    expect(user.validateSync().errors['username']).toBeDefined();
  });

  it('should reject a user with invalid password (not a string)', () => {
    const invalidUserData = {
      name: 456,
      username: 'john_doe',
      password: ['123'], // Invalid password
      userType: 'Student',
    };

    const user = new UserModel(invalidUserData);

    expect(user.validateSync().errors['password']).toBeDefined();
  });

  it('should reject a user with invalid userType (not one of the specified enum values)', () => {
    const invalidUserData = {
      name: '345',
      username: 'john_doe',
      password: 'password123',
      userType: 'InvalidType', // Invalid userType
    };

    const user = new UserModel(invalidUserData);

    expect(user.validateSync().errors['userType']).toBeDefined();
  });
});
