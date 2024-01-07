const request = require('supertest');
const app = require('../app'); // Import your Express app

describe('User Routes', () => {
  test('GET /users should respond with status 200', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
  });

  test('POST /users should respond with status 201', async () => {
    const newUser = {
      name: 'Test User',
      email: 'testuser@example.com',
      password: 'password123'
    };

    const response = await request(app)
      .post('/users')
      .send(newUser);

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe(newUser.name);
    expect(response.body.email).toBe(newUser.email);
    expect(response.body.password).toBeUndefined();
  });

});

describe('Admin Routes', () => {
    test('GET /admin should respond with status 200', async () => {
      const response = await request(app).get('/admin');
      expect(response.statusCode).toBe(200);
    });
  
    test('POST /admin should respond with status 201', async () => {
      const newAdmin = {
        name: 'Test Admin',
        email: 'testadmin@example.com',
        password: 'password123'
      };
  
      const response = await request(app)
        .post('/admin')
        .send(newAdmin);
  
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(newAdmin.name);
      expect(response.body.email).toBe(newAdmin.email);
      expect(response.body.password).toBeUndefined();
    });
  });

  describe('Booking Routes', () => {
    test('GET /booking should respond with status 200', async () => {
      const response = await request(app).get('/booking');
      expect(response.statusCode).toBe(200);
    });
  
    test('POST /booking should respond with status 201', async () => {
      const newBooking = {
        userId: '123',
        showId: '456',
        seats: ['A1', 'A2']
      };
  
      const response = await request(app)
        .post('/booking')
        .send(newBooking);
  
      expect(response.statusCode).toBe(201);
      expect(response.body.userId).toBe(newBooking.userId);
      expect(response.body.showId).toBe(newBooking.showId);
      expect(response.body.seats).toEqual(expect.arrayContaining(newBooking.seats));
    });
  });

  describe('Movie Routes', () => {
    test('GET /premiere should respond with status 200', async () => {
      const response = await request(app).get('/premiere');
      expect(response.statusCode).toBe(200);
    });
  
    test('GET /upcoming should respond with status 200', async () => {
      const response = await request(app).get('/upcoming');
      expect(response.statusCode).toBe(200);
    });
  });