import mongoose from 'mongoose';
import StudentModel from './student';

describe('StudentModel', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a valid student with all fields provided', () => {
    const validStudentData = {
      studentID: 123,
      userID: 456,
      entryNumber: '202300001',
      email: 'example@example.com',
    };

    const student = new StudentModel(validStudentData);

    expect(student.validateSync()).toBeUndefined();
  });

  it('should reject a student with invalid studentID (not a number)', () => {
    const invalidStudentData = {
      studentID: 'invalid', // Invalid studentID
      userID: 456,
      entryNumber: '202300001',
      email: 'example@example.com',
    };

    const student = new StudentModel(invalidStudentData);

    expect(student.validateSync().errors['studentID']).toBeDefined();
  });

  it('should reject a student with invalid userID (not a number)', () => {
    const invalidStudentData = {
      studentID: 123,
      userID: 'invalid', // Invalid userID
      entryNumber: '202300001',
      email: 'example@example.com',
    };

    const student = new StudentModel(invalidStudentData);

    expect(student.validateSync().errors['userID']).toBeDefined();
  });

  it('should reject a student with missing entryNumber', () => {
    const invalidStudentData = {
      studentID: 123,
      userID: 456,
      email: 'example@example.com',
    };

    const student = new StudentModel(invalidStudentData);

    expect(student.validateSync().errors['entryNumber']).toBeDefined();
  });

  it('should reject a student with missing email', () => {
    const invalidStudentData = {
      studentID: 123,
      userID: 456,
      entryNumber: '202300001',
    };

    const student = new StudentModel(invalidStudentData);

    expect(student.validateSync().errors['email']).toBeDefined();
  });
});
