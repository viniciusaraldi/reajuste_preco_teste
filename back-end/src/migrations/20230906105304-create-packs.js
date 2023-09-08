'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Packs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.BIGINT
      },      
      packs_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Produtos",
          key: "code"
        }
      },
      produto_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Produtos",
          key: "code"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Packs');
  }
};
