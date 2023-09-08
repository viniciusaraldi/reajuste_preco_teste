'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produtos', [{
      code: 16,
      name: "AZEITE  PORTUGUÊS  EXTRA VIRGEM GALLO 500M",
      cost_price: 18.44,
      sales_price: 20.49,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      code: 18,
      name: "BEBIDA ENERGÉTICA VIBE 2L",
      cost_price: 8.09,
      sales_price: 8.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      code: 19,
      name: "ENERGÉTICO  RED BULL ENERGY DRINK 250M",
      cost_price: 6.56,
      sales_price: 7.29,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      code: 21,
      name: "ENERGÉTICO RED BULL ENERGY DRINK 355ML",
      cost_price: 9.71,
      sales_price: 10.79,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      code: 22,
      name: "ENERGÉTICO  RED BULL ENERGY DRINK SEM AÇÚCAR 250ML",
      cost_price: 6.74,
      sales_price: 7.49,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      code: 23,
      name: "ÁGUA MINERAL BONAFONT SEM GÁS 1,5L",
      cost_price: 2.15,
      sales_price: 2.39,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      code: 24,
      name: "FILME DE PVC WYDA 28CMX15M",
      cost_price: 3.59,
      sales_price: 3.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      code: 26,
      name: "ROLO DE PAPEL ALUMÍNIO WYDA 30CMX7,5M",
      cost_price: 5.21,
      sales_price: 5.79,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      code: 1000,
      name: "BEBIDA ENERGÉTICA VIBE 2L - 6 UNIDADES",
      cost_price: 48.54,
      sales_price: 53.94,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      code: 1010,
      name: "KIT ROLO DE ALUMINIO + FILME PVC WYDA",
      cost_price: 8.80,
      sales_price: 9.78,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      code: 1020,
      name: "SUPER PACK RED BULL VARIADOS - 6 UNIDADES",
      cost_price: 51.81,
      sales_price: 57.00,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', null, {});
  }
};
