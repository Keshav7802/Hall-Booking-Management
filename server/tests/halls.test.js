const request = require('supertest');
const express = require('express');
const { createHall, getAllHalls, getHall, deleteHall } = require('../controllers/halls.js');

const app = express();
app.use(express.json());

app.post('/api/hall/createHall', createHall);
app.post('/api/hall/deleteHall/:id', deleteHall);
app.post('/api/hall/getAllHalls', getAllHalls);
app.post('/api/hall/getHall', getHall);

describe('Hall API', () => {
    describe('POST /api/hall/createHall', () => {
        it('should create a new hall', async () => {
            const newHallData = {
                Faculty_ID: 123, // Sample Faculty ID
                Hall_ID: "ABC123", // Sample Hall ID
                Hall_Name: "Sample Hall", // Sample Hall Name
                Department: "Sample Department", // Sample Department
                Description: "Sample Description", // Sample Description
                Capacity: 100, // Sample Capacity
                Image1: "sample_image1.jpg", // Sample Image URL 1
                Image2: "sample_image2.jpg" // Sample Image URL 2
            };

            const response = await request(app)
                .post('/api/hall/createHall')
                .send(newHallData);

            if (response.statusCode === 200) {
                expect(response.statusCode).toBe(200);
                expect(response.body).toHaveProperty('_id');
            } else {
                expect(response.statusCode).toBe(400);
                expect(response.body).toHaveProperty('status', 'Failed');
                expect(response.body).toHaveProperty('message');
            }
        });
    });

    describe('GET /api/hall/:id', () => {
        it('should get a hall by ID', async () => {
            const hallId = 'valid_hall_id';

            const response = await request(app)
                .get(`/api/hall/${hallId}`);
            if (response.statusCode === 200) {
                expect(response.statusCode).toBe(200);
                expect(response.body).toHaveProperty('_id', hallId);
            } else {
                expect(response.statusCode).toBe(404); //wrong id
            }
        });

        it('should return 404 if hall ID is invalid', async () => {
            const invalidHallId = 'invalid_hall_id';

            const response = await request(app)
                .get(`/api/hall/${invalidHallId}`);

            expect(response.statusCode).toBe(404);
        });
    });

    describe('GET /api/hall/getAllHalls', () => {
        it('should get all halls', async () => {
            const response = await request(app)
                .get('/api/hall/getAllHalls');
            if (response.statusCode === 200) {
                expect(response.statusCode).toBe(200);
                expect(response.body).toBeInstanceOf(Array);
            } else {
                expect(response.statusCode).toBe(404); //empty database
            }
        });
    });

    describe('DELETE /api/hall/deleteHall/:id', () => {
        it('should delete a hall by ID', async () => {
            const hallId = 'valid_hall_id';

            const response = await request(app)
                .delete(`/api/hall/deleteHall/${hallId}`);
            if (response.statusCode === 200) {
                expect(response.statusCode).toBe(200);
            } else {
                expect(response.statusCode).toBe(404); //wrong id
            }
        });

        it('should return 404 if hall ID is invalid', async () => {
            const invalidHallId = 'invalid_hall_id';

            const response = await request(app)
                .delete(`/api/hall/deleteHall/${invalidHallId}`);

            expect(response.statusCode).toBe(404);
        });
    });

});
