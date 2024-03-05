import mongoose from 'mongoose';
import ItComplaintsModel from './itComplaints';

describe('ItComplaintsModel', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should accept valid IT complaints data', () => {
    // Arrange
    const validComplaintData = {
      complaintID: 1,
      bookingID: 123,
      hallID: 456,
      complaintNote: 'Sample complaint note',
    };

    // Act
    const complaint = new ItComplaintsModel(validComplaintData);

    // Assert
    expect(complaint.validateSync()).toBeUndefined();
  });

  it('should reject IT complaint with non-numeric complaintID', () => {
    // Arrange
    const complaintData = {
      complaintID: 'invalid', // Non-numeric complaintID
      bookingID: 123,
      hallID: 456,
      complaintNote: 'Sample complaint note',
    };

    // Act
    const complaint = new ItComplaintsModel(complaintData);
    const validationError = complaint.validateSync();

    // Assert
    expect(validationError.errors['complaintID']).toBeDefined();
  });

  it('should reject IT complaint without bookingID', () => {
    // Arrange
    const complaintData = {
      complaintID: 1,
      // bookingID is intentionally missing
      hallID: 456,
      complaintNote: 'Sample complaint note',
    };

    // Act
    const complaint = new ItComplaintsModel(complaintData);
    const validationError = complaint.validateSync();

    // Assert
    expect(validationError.errors['bookingID']).toBeDefined();
  });

  it('should reject IT complaint without hallID', () => {
    // Arrange
    const complaintData = {
      complaintID: 1,
      bookingID: 123,
      // hallID is intentionally missing
      complaintNote: 'Sample complaint note',
    };

    // Act
    const complaint = new ItComplaintsModel(complaintData);
    const validationError = complaint.validateSync();

    // Assert
    expect(validationError.errors['hallID']).toBeDefined();
  });

  
});
