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
router.get('/', isAuthenticated, PesananController.getAllPesanan);
router.post('/', isAuthenticated, PesananController.addPesanan);
router.get('/:id', isAuthenticated, PesananController.getPesananById);
router.get('/:id/pelanggan', isAuthenticated, PesananController.getPesananOfPelanggan);
router.put('/:id', isAuthenticated, PesananController.updatePesanan);
router.delete('/:id',isAuthenticated, PesananController.deletePesanan);
module.exports = router;