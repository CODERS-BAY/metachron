'use strict';
/* import seeddata */
const userSeedData = require("./data/user.seed.data");

/* import bcrypt */
const bcrypt = require("bcrypt");
const saltRounds = 10;

/* hash password information */
function cryptPassword(password) {
  return bcrypt.hashSync(password, saltRounds);
}

function getData() {
  let result = new Array();
  userSeedData.forEach(element => {
    element.password = cryptPassword(element.password);
    result.push(element);
  });
  return result;
}
const data = getData();

/* export seed */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert("user",
      data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
