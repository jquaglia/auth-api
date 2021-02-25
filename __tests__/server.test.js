'use strict';

const server = require('../src/server.js');
const supergoose = require('@code-fellows/supergoose');
const request = supergoose(server.server);

describe('Testing Authorization routes', () => {
  let user = null;
  it('Users with role \'user\' should only be able to read', async () => {

    const newUser = await request.post('/signup').send({
      username: 'Jason',
      password: 'test',
      role: 'user',
    });
    console.log(newUser);

    // expect(newUser.status).toEqual(201);
    // user = newUser.body;
    // console.log(user);
    // expect(user.capabilities).toEqual(["read"]);

    // const readFood = await request.get('/api/v2/food').set('Authorization', `Bearer ${newUser.body.token}`);

    // expect(readFood.status).toEqual(200);
    // expect(readFood.body).toBeTruthy();
  });

  it('should POST /signup creates a new user and sends an object with the user and the token to the client', async () => {
 
  });

  it('should POST /signin with basic authentication headers logs in a user and sends an object with the user and the token to the client', async () => {

  });

  it('should POST /api/v1/:model adds an item to the DB and returns an object with the added item', async () => {
  
  });

  it('should GET /api/v1/:model returns a list of :model items', async () => {
  
  });

  it('should GET /api/v1/:model/ID returns a single item by ID', async () => {
   
  });

  it('should PUT /api/v1/:model/ID returns a single, updated item by ID', async () => {
    
  });

  it('should DELETE /api/v1/:model/ID returns an empty object. Subsequent GET for the same ID should result in nothing found', async () => {
 
  });

  it('should POST /api/v2/:model with a bearer token that has create permissions adds an item to the DB and returns an object with the added item', async () => {
   
  });

  it('should GET /api/v2/:model with a bearer token that has read permissions returns a list of :model items', async () => {

  });

  it('should GET /api/v2/:model/ID with a bearer token that has read permissions returns a single item by ID', async () => {

  });

  it('should PUT /api/v2/:model/ID with a bearer token that has update permissions returns a single, updated item by ID', async () => {
   
  });

  it('should DELETE /api/v2/:model/ID with a bearer token that has delete permissions returns an empty object. Subsequent GET for the same ID should result in nothing found', async () => {
 
  });
});