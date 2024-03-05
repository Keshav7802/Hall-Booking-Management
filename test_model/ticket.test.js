import mongoose from 'mongoose';
import TicketModel from './ticket';

describe('TicketModel', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a valid ticket with all fields provided', () => {
    const validTicketData = {
      ticketID: 'abc123',
      ticketPrice: 10,
      totalTickets: 100,
    };

    const ticket = new TicketModel(validTicketData);

    expect(ticket.validateSync()).toBeUndefined();
  });

  it('should reject a ticket with invalid ticketID (not a string)', () => {
    const invalidTicketData = {
      ticketID: 123, // Invalid ticketID
      ticketPrice: 10,
      totalTickets: 100,
    };

    const ticket = new TicketModel(invalidTicketData);

    expect(ticket.validateSync().errors['ticketID']).toBeDefined();
  });

  it('should reject a ticket with invalid ticketPrice (not a number)', () => {
    const invalidTicketData = {
      ticketID: 'abc123',
      ticketPrice: 'invalid', // Invalid ticketPrice
      totalTickets: 100,
    };

    const ticket = new TicketModel(invalidTicketData);

    expect(ticket.validateSync().errors['ticketPrice']).toBeDefined();
  });

  it('should reject a ticket with invalid totalTickets (not a number)', () => {
    const invalidTicketData = {
      ticketID: 'abc123',
      ticketPrice: 10,
      totalTickets: 'invalid', // Invalid totalTickets
    };

    const ticket = new TicketModel(invalidTicketData);

    expect(ticket.validateSync().errors['totalTickets']).toBeDefined();
  });

  it('should reject a ticket with negative ticketPrice', () => {
    const invalidTicketData = {
      ticketID: 'abc123',
      ticketPrice: -10, // Negative ticketPrice
      totalTickets: 100,
    };

    const ticket = new TicketModel(invalidTicketData);

    expect(ticket.validateSync().errors['ticketPrice']).toBeDefined();
  });

  it('should reject a ticket with negative totalTickets', () => {
    const invalidTicketData = {
      ticketID: 'abc123',
      ticketPrice: 10,
      totalTickets: -100, // Negative totalTickets
    };

    const ticket = new TicketModel(invalidTicketData);

    expect(ticket.validateSync().errors['totalTickets']).toBeDefined();
  });
});
