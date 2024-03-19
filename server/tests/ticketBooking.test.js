const request = require('supertest');
const express = require('express');
const { createTicketBooking, getTicketBooking } = require('../controllers/ticketBooking.js');

const app = express();
app.use(express.json());

app.post('/api/ticketBooking/createTicketBooking', createTicketBooking);
app.get('/api/ticketBooking/getTicketBooking/:userId/:eventId',getTicketBooking );



const TicketBookingModel = require('../models/ticketBooking');

jest.mock('../models/ticketBooking', () => ({
  create: jest.fn(),
  findOne: jest.fn(),
}));

describe('Ticket Booking API', () => {
  describe('POST /api/ticketBooking/createTicketBooking', () => {
    it('should create a new ticket booking', async () => {
      const newTicketBookingData = {
        studentID: 123,
        ticketID: 456,
        bookingDateTime: new Date()
      };

      TicketBookingModel.create.mockResolvedValue(newTicketBookingData);

      const response = await request(app)
        .post('/api/ticketBooking/createTicketBooking')
        .send(newTicketBookingData);

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(newTicketBookingData);
    });
  });

  describe('GET /api/ticketBooking/getTicketBooking/:userId/:eventId', () => {
    it('should get ticket booking by user ID and event ID', async () => {
      const userId = 123;
      const eventId = 456;
      const ticketBookingData = {
        ticketBookingID: 1,
        studentID: userId,
        ticketID: 789,
        bookingDateTime: new Date()
      };

      TicketBookingModel.findOne.mockResolvedValue(ticketBookingData);

      const response = await request(app)
        .get(`/api/ticketBooking/getTicketBooking/${userId}/${eventId}`);

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(ticketBookingData);
    });
  });
});
