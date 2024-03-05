import mongoose from 'mongoose';
import HallModel from './hall';

describe('HallModel', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should accept valid hall data', () => {
    // Arrange
    const validHallData = {
      hallID: 1,
      hallName: 'Sample Hall',
      departmentBlock: 'Engineering',
      hallCapacity: 100,
    };

    // Act
    const hall = new HallModel(validHallData);

    // Assert
    expect(hall.validateSync()).toBeUndefined();
  });

  it('should reject hall with negative hallID', () => {
    // Arrange
    const hallData = {
      hallID: -1, // Negative hallID
      hallName: 'Sample Hall',
      departmentBlock: 'Engineering',
      hallCapacity: 100,
    };

    // Act
    const hall = new HallModel(hallData);
    const validationError = hall.validateSync();

    // Assert
    expect(validationError.errors['hallID']).toBeDefined();
  });

  it('should reject hall with non-numeric hallCapacity', () => {
    // Arrange
    const hallData = {
      hallID: 1,
      hallName: 'Sample Hall',
      departmentBlock: 'Engineering',
      hallCapacity: 'Not a number', // Non-numeric hallCapacity
    };

    // Act
    const hall = new HallModel(hallData);
    const validationError = hall.validateSync();

    // Assert
    expect(validationError.errors['hallCapacity']).toBeDefined();
  });
});
