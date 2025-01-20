const request = require('supertest');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set up the route for testing
app.get('/', (req, res) => {
  res.send('Hello, World! This is a deployable Node.js app.');
});

// Test the / route
describe('GET /', () => {
  it('should return a 200 status code and a message', async () => {
    const response = await request(app).get('/');

    // Check that the response has a status code of 200
    expect(response.status).toBe(200);

    // Check that the response body contains the expected message
    expect(response.text).toBe('Hello, World! This is a deployable Node.js app.');
  });
});