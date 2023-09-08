'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Packs', [
      {
        packs_id: 1000,
        produto_id: 16,
        qty: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        packs_id: 1010,
        produto_id: 24,
        qty: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packs_id: 1010,
        produto_id: 26,
        qty: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packs_id: 1020,
        produto_id: 19,
        qty: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packs_id: 1020,
        produto_id: 21,
        qty: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
  ], {});
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Packs', null, {});
  }
};
