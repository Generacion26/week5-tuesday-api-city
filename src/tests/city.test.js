const request = require('supertest');
const app = require('../app');
const City = require('../models/City');
let cityId

beforeAll(async () => {
  return await City.bulkCreate(
    [
      {
        name: "Buenos Aires",
        country: "Argentina",
        isCapital: true
      },
      {
        name: "Ciudad de mexico",
        country: "Mexico",
        isCapital: true

      }
    ])
});

const city = {
  name: "Bogota",
  country: "Colombia",
  isCapital: true
}

test("Get -> '/api/v1/cities' should return status code 200 ", async () => {
  const res = await request(app)
    .get('/api/v1/cities')

  expect(res.statusCode).toBe(200)
  expect(res.body).toBeDefined()
  expect(res.body.length).toBe(2)
  expect(res.body).toHaveLength(2)
})


test("POST -> '/api/v1/cities',should return status code 201, body is defined,and res.body.name === city.name ", async () => {
  const res = await request(app)
    .post('/api/v1/cities')
    .send(city)

  cityId = res.body.id

  expect(res.status).toBe(201)
  expect(res.body).toBeDefined()
  expect(res.body.name).toBe(city.name)
})


test("GET -> '/api/v1/cities/:id', should return status code 200, res.body to be defined and res.body.name === city.name", async () => {
  const res = await request(app)
    .get(`/api/v1/cities/${cityId}`)

  expect(res.status).toBe(200)
})

test("PUT -> '/api/v1/cities/:id', sholuld return status code 200, res.body.name ==== cityUpdate.name  ", async () => {
  const cityUpdate = {
    name: "Lima",
    country: "Peru"
  }
  const res = await request(app)
    .put(`/api/v1/cities/${cityId}`)
    .send(cityUpdate)

  expect(res.status).toBe(200)
  expect(res.body).toBeDefined()
  expect(res.body.name).toBe(cityUpdate.name)
  expect(res.body.country).toBe(cityUpdate.country)
})

test("Delete -> '/api/v1/cities/:id', should return status code 204", async () => {
  const res = await request(app)
    .delete(`/api/v1/cities/${cityId}`)

  expect(res.statusCode).toBe(204)
})