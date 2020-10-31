require('dotenv').config();
const mongoose = require('mongoose');
const request = require('supertest');
const R = require('ramda');

const connectDB = require('../../dbinit');
require('../../utilities/testing/setupModels');

const app = require('../../utilities/testing/createTestServer')();
const getUser = require('../../controllers/v2/user/getUser');

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

test('GET on "/": Status 200', async () => {
  const res = await request(app).get('/');
  expect(res.status).toBe(200);
});

test('GET on "/": Format JSON & UTF-8', async () => {
  const res = await request(app).get('/');
  expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
});

test('GET on "/": Returns Object-instance', async () => {
  const res = await request(app).get('/');
  expect(R.is(Object, res.body)).toBeTruthy();
});

test('GET on "/": Object has all correct properties', async () => {
  const res = await request(app).get('/');
  expect(res.body).toMatchObject({
    _id: expect.any(String),
    name: expect.any(String),
    email: expect.any(String),
    theme: expect.any(String),
    avatar: expect.any(String),
    createdAt: expect.any(String),
    bands: expect.any(Array),
  });
});

test('GET on "/": Object has no private properties', async () => {
  const res = await request(app).get('/');
  expect(res.body).not.toMatchObject({
    auth_token: expect.any(String),
  });
});
