const request = require('supertest');
const express = require('express');
const { createEvent, deleteEvent } = require('../controllers/event.js');

const app = express();
app.use(express.json());

app.post('/api/event/createEvent', createEvent);
app.delete('/api/event/deleteEvent/:eventID', deleteEvent);

describe('Event API', () => {
    describe('POST /api/event/createEvent', () => {
        it('should create a new event', async () => {
            const newEventData = {
                eventID: 123,
                eventName: "Sample Event",
                eventType: "Workshop",
                clubID: 123,
                eventPurpose: "Learning new skills",
                startDateTime: "2024-03-20T10:00:00",
                endDateTime: "2024-03-20T12:00:00",
                eventDuration: 2,
                ticketBooking: true,
                ticketID: 456
            };

            const response = await request(app)
                .post('/api/event/createEvent')
                .send(newEventData);

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('_id');
        });
    });

    describe('DELETE /api/event/deleteEvent/:eventID', () => {
        it('should delete an event by ID', async () => {
            // Assume eventID for deletion
            const eventIDToDelete = 123;

            const response = await request(app)
                .delete(`/api/event/deleteEvent/${eventIDToDelete}`);

            expect(response.statusCode).toBe(200);
        });
    });
});
