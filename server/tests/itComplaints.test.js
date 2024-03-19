const request = require('supertest');
const express = require('express');
const {create} = require('../controllers/itComplaints.js');
const ItComplaintsModel = require('../models/itComplaints.js');

const app = express();
app.use(express.json());

app.post('/api/itComplaints/create', create);



describe('POST /api/itComplaints/create', () => {
  it('should create a new IT complaint', async () => {
    const newComplaintData = {
      complaintID: 1,
      bookingID: 123,
      hallID: 456,
      complaintNote: "Test complaint note"
    };

    ItComplaintsModel.create.mockResolvedValue(newComplaintData);

    const response = await request(app)
      .post('/api/itComplaints/create')
      .send(newComplaintData);

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(newComplaintData);
  });

  
});
