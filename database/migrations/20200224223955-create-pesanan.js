'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pesanans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pelanggan: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Pelanggans', 
          key: 'id', 
        }
      },
      tanggal_pesanan: {
        allowNull: false,
        type: Sequelize.DATE
      },
      total_harga: {
        allowNull: false,
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pesanans');
  }
};