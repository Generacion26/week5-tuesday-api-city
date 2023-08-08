const supertest = require('supertest');
const app = require('../app')

test("Get -> '/api/v1/cities' should return status code 200 ", async () => {
  const res = await supertest(app)
    .get('/api/v1/cities')

  expect(res.status).toBe(200)
  expect(res.body).toBeDefined()
  expect(res.body).toHaveLength(2)
})