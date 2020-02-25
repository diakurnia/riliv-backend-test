'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Pelanggans',
    [
      {
        nama: 'dia kurnia',
        tanggal_daftar: '2020-01-01',
        umur: '24',
        no_hp: '08671234711',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: 'annisa',
        tanggal_daftar: '2020-02-02',
        umur: '27',
        no_hp: '08271234741',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: 'aryo',
        tanggal_daftar: '2019-04-02',
        umur: '21',
        no_hp: '082712329741',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Pelanggans', null, {}),
};

