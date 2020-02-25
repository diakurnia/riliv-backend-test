require('dotenv').config();
const express = require('express');
const bodyParser =require('body-parser');

//import routes of pelanggan and pesanan
const pelangganRoutes = require('./server/routes/PelangganRoutes');
const pesananRoutes = require('./server/routes/PesananRoutes');
const tokenRoutes = require('./server/routes/tokenJwtRoute');

config.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

//Api pelanggan dan pesanan
app.use('/api/token', tokenRoutes)
app.use('/api/pelanggan', pelangganRoutes);
app.use('/api/pesanan', pesananRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

module.exports =  app;