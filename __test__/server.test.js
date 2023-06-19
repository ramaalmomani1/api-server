'use strict';

require('dotenv').config();
const { app } = require('../src/server');
const supertest = require('supertest');
const mockServer = supertest(app);

const { db } = require('../src/models/index');

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