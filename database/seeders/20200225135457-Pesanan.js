'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Pesanans',
    [
      {
        id_pelanggan:'1',
        tanggal_pesanan: '2020-02-21',
        total_harga: '23000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_pelanggan:'1',
        tanggal_pesanan: '2020-02-04',
        total_harga: '290000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_pelanggan:'2',
        tanggal_pesanan: '2020-02-02',
        total_harga: '2397000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_pelanggan:'3',
        tanggal_pesanan: '2020-01-01',
        total_harga: '200000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Pesanans', null, {}),
};
