const request = require('supertest');
const express = require('express');
const { createBooking, getAllBookings, updateBooking} = require('../controllers/booking.js');

const app = express();
app.use(express.json());

app.post('/api/booking/createBooking', createBooking);
app.get('/api/booking/getAllBookings', getAllBookings);
app.patch('/api/booking/updateBooking/:id', updateBooking);


describe('Booking API', () => {
describe('POST /api/booking/createBooking', () => {
  it('responds with JSON and 200 OK', async () => {
    const response = await request(app)
      .post('/api/booking/createBooking')
      .send({
        userID: 123,
        eventID: 456,
        bookingStatus: 'Pending',
        bookingDateTime: '2024-03-20T09:00:00',
        hallIDs: [789, 890]
      });

    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
    
    const responseBody = response.body;
    expect(responseBody).toHaveProperty('bookingID');
    expect(responseBody).toHaveProperty('userID', 123);
    expect(responseBody).toHaveProperty('eventID', 456);
    expect(responseBody).toHaveProperty('bookingStatus', 'Pending');
    expect(responseBody).toHaveProperty('bookingDateTime', '2024-03-20T09:00:00');
    expect(responseBody).toHaveProperty('hallIDs');
    expect(Array.isArray(responseBody.hallIDs)).toBe(true);
    expect(responseBody.hallIDs.length).toBeGreaterThan(0);
    responseBody.hallIDs.forEach(hallID => {
      expect(hallID).toBeInstanceOf(Number);
    });
  });

  });



  describe('GET /api/booking/getAllBookings', () => {
    it('responds with JSON and 200 OK', async () => {
      const response = await request(app).get('/api/booking/getAllBookings');
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch(/application\/json/);
    });
  
    it('returns an array of booking objects', async () => {
      const response = await request(app).get('/api/allBookings');
      const bookings = response.body;
      expect(Array.isArray(bookings)).toBe(true);
      bookings.forEach(booking => {
        expect(booking).toHaveProperty('bookingID');
        expect(booking).toHaveProperty('userID');
        expect(booking).toHaveProperty('eventID');
        expect(booking).toHaveProperty('bookingStatus');
        expect(booking).toHaveProperty('bookingDateTime');
        expect(booking).toHaveProperty('approvalDateTime');
        expect(booking).toHaveProperty('hallIDs');
        expect(Array.isArray(booking.hallIDs)).toBe(true);
      });
    });
  });


  const sampleBookingId = '609c6d523f88c837bc9900e0';

describe('PATCH api/booking/updateBooking/:id', () => {
  it('updates a booking status', async () => {
    const newStatus = 'Approved'; // New status to be updated

    // Send PATCH request to update booking status
    const response = await request(app)
      .patch(`/api/booking/updateBooking/${sampleBookingId}`)
      .send({
        Status: newStatus,
      })
      .set('Authorization', `Bearer ${yourAdminToken}`); // Replace yourAdminToken with your actual admin token

    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('_id');
    expect(response.body).toHaveProperty('bookingStatus', newStatus);

    });

  it('returns 400 if invalid booking ID is provided', async () => {
    const invalidBookingId = 'invalid_id';

   
    const response = await request(app)
      .patch(`/api/booking/updateBooking/${invalidBookingId}`)
      .send({
        Status: 'Approved',
      })
      .set('Authorization', `Bearer ${yourAdminToken}`); // Replace yourAdminToken with your actual admin token

    
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('status', 'Failed');
  });
});

});