const { Router } =require('express');
const PesananController = require('../controllers/PesananController');
const isAuthenticated = require('../middleware/checkAuth');

const router = Router();

//route pesanan without authorization
router.get('/', PesananController.getAllPesanan);
router.post('/', PesananController.addPesanan);
router.get('/:id', PesananController.getPesananById);
router.get('/:id/pelanggan', PesananController.getPesananOfPelanggan);
router.put('/:id', PesananController.updatePesanan);
router.delete('/:id', PesananController.deletePesanan);

//route with token to authorization
router.get('/auth', isAuthenticated, PesananController.getAllPesanan);
router.post('/auth', isAuthenticated, PesananController.addPesanan);
router.get('/auth/:id', isAuthenticated, PesananController.getPesananById);
router.get('/auth/:id/pelanggan', isAuthenticated, PesananController.getPesananOfPelanggan);
router.put('/auth/:id', isAuthenticated, PesananController.updatePesanan);
router.delete('/auth/:id',isAuthenticated, PesananController.deletePesanan);

module.exports = router;