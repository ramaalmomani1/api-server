'use strict'; 

require('dotenv').config(); 
const { app } = require('../src/server'); 
const supertest = require('supertest'); 
const mockServer = supertest(app);

const { db } = require('../src/models/index');// d

beforeAll(async () => {
  await db.sync();
})

afterAll(async () => {
  await db.drop();
})

describe('Server test', () => {
  it(' Not found pages', async () => {
    const res = await mockServer.get('/ttyy');
    expect(res.status).toEqual(404);
  })

  it(' Not found pages', async () => {
    const res = await mockServer.put('/ttyy');
    expect(res.status).toEqual(404);
  })

  it('Add new food record', async () => {
    const res = await mockServer.post('/food').send({
      flavour: 'Sweet',
      color: 'Yalllow'
    });
    const createdFood = JSON.parse(res.text);
    expect(res.status).toBe(201);
    expect(createdFood.flavour).toEqual('Sweet')
  });

  it('all food records ', async () => {
    const res = await mockServer.get('/food');
    expect(res.status).toBe(200);
  })

  it('Read one food record using id ', async () => {
    const res = await mockServer.get('/food/1');
    expect(res.status).toBe(200);
  })

  it('Update food record using id', async () => {
    const res = await mockServer.put('/food/1');
    expect(res.status).toBe(202);
  })

  it('Delete food record using id', async () => {
    const res = await mockServer.delete('/food/1');
    expect(res.status).toBe(204);
  })

  /////////////////

  it('Add new clothes record', async () => {
    const res = await mockServer.post('/clothes').send({
      color: 'Black',
      size: 'medium',
      FabricName: 'cotton',
      stretchability: 'Medium'
    });
    const createdClothes = JSON.parse(res.text);
    expect(res.status).toBe(201);
    expect(createdClothes.FabricName).toEqual('cotton')
  });

  it('all clothes records ', async () => {
    const res = await mockServer.get('/clothes');
    expect(res.status).toBe(200);
  })

  it('Read one clothes record using id ', async () => {
    const res = await mockServer.get('/clothes/1');
    expect(res.status).toBe(200);
  })
  it('Update clothes record using id', async () => {
    const res = await mockServer.put('/clothes/1');
    expect(res.status).toBe(202);
  })

  it('Delete clothes record using id', async () => {
    const res = await mockServer.delete('/clothes/1');
    expect(res.status).toBe(204);
  })
})


/*
The code defines a server that exposes two endpoints: /food and /clothes. 
The /food endpoint allows to create, read, update, and delete food records. 
The /clothes endpoint allows to create, read, update, and delete clothes records.
It uses the supertest library to make requests to the server and test the endpoints. 
beforeAll hook ensures that the database is synchronized before the tests are run.
afterAll hook ensures that the database is dropped after the tests are run.
each block define a test case. 
The expect function is used to assert the expected behavior of the server.
block that defines the Add new food record test case asserts that the server returns a status code of 201 (Created) when a new food record is created. 
The expect function also asserts that the flavour property of the created food record is equal to the value that was passed in the request body.
The other blocks define similar test cases for the /clothes endpoint.
*/

