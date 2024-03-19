const request = require('supertest');
const express = require('express');
const { registerUser, authUser } = require('../controllers/auth.js');

const app = express();
app.use(express.json());

app.post('/api/auth/register', registerUser);
app.post('/api/auth/login', authUser);

describe('Authentication API', () => {
  describe('POST /api/auth/register', () => {
    it('should register a user', async () => {
      const userData = {
        Student_ID: '123',
        Student_Name: 'Test User',
        Department: 'Test Department',
        Email: 'test@example.com',
        Password: 'testpassword',
      };

      const response = await request(app)
        .post('/api/auth/register')
        .send(userData);

      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty('_id');
      expect(response.body).toHaveProperty('Student_ID', userData.Student_ID);
      expect(response.body).toHaveProperty('Student_Name', userData.Student_Name);
      expect(response.body).toHaveProperty('Department', userData.Department);
      expect(response.body).toHaveProperty('Email', userData.Email);
      expect(response.body).toHaveProperty('token');
    }); 

    it('should return 400 if required fields are missing', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({});

      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty('msg', 'Please fill all required field');
    });

    it('should return 401 if user with the same email already exists', async () => {
      const userData = {
        Student_ID: '456',
        Student_Name: 'Existing User',
        Department: 'Existing Department',
        Email: 'existing@example.com',
        Password: 'existingpassword',
      };

      // Register a user with the same email
      await request(app)
        .post('/api/auth/register')
        .send(userData);

      const response = await request(app)
        .post('/api/auth/register')
        .send(userData);

      expect(response.statusCode).toBe(401);
      expect(response.body).toHaveProperty('msg', 'User with this email already exist.');
    }); 
  });

  describe('POST /api/auth/login', () => {
    it('should login a user', async () => {
      const userData = {
        Email: 'test@example.com',
        Password: 'testpassword',
      };

      const response = await request(app)
        .post('/api/auth/login')
        .send(userData);

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('_id');
      expect(response.body).toHaveProperty('Student_ID');
      expect(response.body).toHaveProperty('Student_Name');
      expect(response.body).toHaveProperty('Department');
      expect(response.body).toHaveProperty('Email', userData.Email);
      expect(response.body).toHaveProperty('token');
    });

    it('should return 401 if user with provided email does not exist', async () => {
      const userData = {
        Email: 'nonexistent@example.com',
        Password: 'testpassword',
      };

      const response = await request(app)
        .post('/api/auth/login')
        .send(userData);

      expect(response.statusCode).toBe(401);
      expect(response.body).toHaveProperty('msg', 'Invalid credentials.');
    });

    it('should return 401 if provided password is incorrect', async () => {
      const userData = {
        Email: 'test@example.com',
        Password: 'incorrectpassword',
      };

      const response = await request(app)
        .post('/api/auth/login')
        .send(userData);

      expect(response.statusCode).toBe(401);
      expect(response.body).toHaveProperty('msg', 'Invalid credentials.');
    });
  });
 });
