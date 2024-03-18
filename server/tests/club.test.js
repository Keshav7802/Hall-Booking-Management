const request = require('supertest');
const express = require('express');
const { createClub, deleteClub, getClub, getAllClubs } = require('../controllers/club.js');

const app = express();
app.use(express.json());

app.post('/api/club/createClub', createClub);
app.delete('/api/club/deleteClub/:id', deleteClub);
app.get('/api/club/getClub/:id', getClub);
app.get('/api/club/getAllClubs', getAllClubs);

describe('Club API', () => {
    describe('POST /api/club/createClub', () => {
        it('should create a new club', async () => {
            const clubData = {
                name: 'Test Club',
                description: 'Test Club Description',
                // Any other fields in definition of createClub will be added here
            };

            const response = await request(app)
                .post('/api/club/createClub')
                .send(clubData);

            expect(response.statusCode).toBe(201);
            expect(response.body).toHaveProperty('_id');
            expect(response.body).toHaveProperty('name', clubData.name);
            expect(response.body).toHaveProperty('description', clubData.description);
        });

        it('should return 400 if required fields are missing', async () => {
            const response = await request(app)
                .post('/api/club/createClub')
                .send({}); // Sending empty data

            expect(response.statusCode).toBe(400);
        });
    });

    describe('DELETE /api/club/deleteClub/:id', () => {
        it('should delete a club by ID', async () => {
            // Assuming club is deleted based on clubId
            const clubId = 'valid_club_id';

            const response = await request(app)
                .delete(`/api/club/deleteClub/${clubId}`);

            expect(response.statusCode).toBe(200);
        });

        it('should return 404 if club ID is invalid', async () => {
            //Invalid id passed
            const invalidClubId = 'invalid_club_id';

            const response = await request(app)
                .delete(`/api/club/deleteClub/${invalidClubId}`);

            expect(response.statusCode).toBe(404);
        });
    });

    describe('GET /api/club/getClub/:id', () => {
        it('should get a club by ID', async () => {
            const clubId = 'valid_club_id';

            const response = await request(app)
                .get(`/api/club/getClub/${clubId}`);

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('_id', clubId);
        });

        it('should return 404 if club ID is invalid', async () => {
            const invalidClubId = 'invalid_club_id';

            const response = await request(app)
                .get(`/api/club/getClub/${invalidClubId}`);

            expect(response.statusCode).toBe(404);
        });
    });

    describe('GET /api/club/getAllClubs', () => {
        it('should get all clubs', async () => {
            const response = await request(app)
                .get('/api/club/getAllClubs');

            expect(response.statusCode).toBe(200);
            expect(response.body).toBeInstanceOf(Array);
        });
    });
});
