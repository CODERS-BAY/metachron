'use strict';

const userSeedData = require("./data/user.seed.data");
const bcrypt = require("bcrypt");

const saltRounds = 10;

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
