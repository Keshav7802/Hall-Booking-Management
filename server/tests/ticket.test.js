
const request = require('supertest');
const express = require('express');
const { createTicket, getTicket} = require('../controllers/ticket.js');

const app = express();
app.use(express.json());

app.post('/api/ticket/createTicket', createTicket);
app.get('/api/ticket/getTicket/:id', getTicket);



const sampleTicketData = {
  ticketPrice: 50,
  totalTickets: 100,
};

let createdTicketId; // To store the ID of the ticket created for testing

describe('POST /api/ticket/createTicket', () => {
  it('creates a new ticket', async () => {
    
    const response = await request(app)
      .post('/api/ticket/createTicket')
      .send(sampleTicketData);

    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('ticketID');
    expect(response.body).toHaveProperty('ticketPrice');
    expect(response.body).toHaveProperty('totalTickets');
    expect(response.body.ticketPrice).toBe(50);
    expect(response.body.totalTickets).toBe(100);


    createdTicketId = response.body.ticketID;
  });

  it('returns 400 if required fields are missing', async () => {
   
    const incompleteTicketData = { totalTickets: 50 };

    
    const response = await request(app)
      .post('/api/ticket/createTicket')
      .send(incompleteTicketData);

 
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('status', 'Failed');
  });
});

describe('GET /api/ticket/getTicket/:id', () => {
  it('returns a ticket by ID', async () => {
    
    const response = await request(app).get(`/api/ticket/getTicket/${createdTicketId}`);

    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('ticketID', createdTicketId);
  });

 
});
