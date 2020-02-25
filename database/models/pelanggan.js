'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pelanggan = sequelize.define('Pelanggan', {
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_daftar: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    umur: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    no_hp: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Pelanggan.associate = function(models) {
    // association between pelanggan and pesanan is defined here
    Pelanggan.hasMany(models.Pesanan, {
      foreignKey: 'id_pelanggan',
      as: 'pesanan'
    })
  };
  return Pelanggan;
};