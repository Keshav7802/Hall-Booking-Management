import BookingModel from './booking';

describe('BookingModel', () => {
  it('should define a valid schema', () => {
    const sampleBooking = {
      bookingID: 1,
      userID: 123,
      eventID: 456,
      bookingStatus: 'Pending',
      bookingDateTime: new Date(),
      approvalDateTime: new Date(),
      hallIDs: [789]
    };
    const booking = new BookingModel(sampleBooking);
    expect(booking.validateSync()).toBeUndefined();
  });

  it('should throw validation error for missing required fields', () => {
    const booking = new BookingModel(); // Missing required fields
    const validationError = booking.validateSync();
    expect(validationError.errors.bookingID).toBeDefined();
    expect(validationError.errors.userID).toBeDefined();
    expect(validationError.errors.eventID).toBeDefined();
    expect(validationError.errors.bookingStatus).toBeDefined();
    expect(validationError.errors.bookingDateTime).toBeDefined();
    expect(validationError.errors.approvalDateTime).toBeDefined();
    expect(validationError.errors.hallIDs).toBeDefined();
  });

  it('should throw validation error for invalid booking status', () => {
    const sampleBooking = {
      bookingID: 1,
      userID: 123,
      eventID: 456,
      bookingStatus: 'Invalid', // Invalid booking status
      bookingDateTime: new Date(),
      approvalDateTime: new Date(),
      hallIDs: [789]
    };
    const booking = new BookingModel(sampleBooking);
    const validationError = booking.validateSync();
    expect(validationError.errors.bookingStatus).toBeDefined();
  });
});
