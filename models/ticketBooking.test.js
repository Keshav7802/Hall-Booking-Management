import mongoose from 'mongoose';
import TicketBookingModel from './ticketBooking';

describe('TicketBookingModel', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a valid ticket booking with all fields provided', () => {
    const validTicketBookingData = {
      ticketBookingID: 1,
      studentID: 2,
      ticketID: 3,
      bookingDateTime: new Date(),
    };

    const ticketBooking = new TicketBookingModel(validTicketBookingData);

    expect(ticketBooking.validateSync()).toBeUndefined();
  });

  it('should reject a ticket booking with invalid ticketBookingID (not a number)', () => {
    const invalidTicketBookingData = {
      ticketBookingID: 'invalid', // Invalid ticketBookingID
      studentID: 2,
      ticketID: 3,
      bookingDateTime: new Date(),
    };

    const ticketBooking = new TicketBookingModel(invalidTicketBookingData);

    expect(ticketBooking.validateSync().errors['ticketBookingID']).toBeDefined();
  });

  it('should reject a ticket booking with invalid studentID (not a number)', () => {
    const invalidTicketBookingData = {
      ticketBookingID: 1,
      studentID: 'invalid', // Invalid studentID
      ticketID: 3,
      bookingDateTime: new Date(),
    };

    const ticketBooking = new TicketBookingModel(invalidTicketBookingData);

    expect(ticketBooking.validateSync().errors['studentID']).toBeDefined();
  });

  it('should reject a ticket booking with invalid ticketID (not a number)', () => {
    const invalidTicketBookingData = {
      ticketBookingID: 1,
      studentID: 2,
      ticketID: 'invalid', // Invalid ticketID
      bookingDateTime: new Date(),
    };

    const ticketBooking = new TicketBookingModel(invalidTicketBookingData);

    expect(ticketBooking.validateSync().errors['ticketID']).toBeDefined();
  });

  it('should reject a ticket booking with invalid bookingDateTime (not a date)', () => {
    const invalidTicketBookingData = {
      ticketBookingID: 1,
      studentID: 2,
      ticketID: 3,
      bookingDateTime: 'invalid', // Invalid bookingDateTime
    };

    const ticketBooking = new TicketBookingModel(invalidTicketBookingData);

    expect(ticketBooking.validateSync().errors['bookingDateTime']).toBeDefined();
  });
});
