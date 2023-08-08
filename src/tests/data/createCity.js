const City = require("../../models/City")

const createCity = async () => {
  await City.bulkCreate([
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
}

module.exports = {
  createCity
}