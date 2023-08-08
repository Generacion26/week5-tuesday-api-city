const sequelize = require("../utils/connection");
const { createCity } = require("./data/createCity");
require('../models')

const testMigrate = async () => {
  try {
    await sequelize.sync({ force: true })
    console.log('DB reset ✅');

    await createCity()

    process.exit()
  } catch (error) {
    console.error(error);
  }

}

testMigrate()
