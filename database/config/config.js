require('dotenv').config();


module.exports = {

  development: {
    database: 'riliv',
    username: 'dia',
    password: 'dia',
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  test: {
    database: 'test',
    username: 'postgres',
    password: '123456',
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  production: {
    database: 'deg1oem9ef4aoj',
    username: 'alqhlnozbsmuzg',
    password: '840d07e7e9ac2da1da58d222039b49ea747e34d97c1c0ca31ab372674a7a8516',
    host: 'ec2-34-235-108-68.compute-1.amazonaws.com',
    dialect: 'postgres'
  }
};