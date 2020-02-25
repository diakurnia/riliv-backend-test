const { Router } =require('express');
const PesananController = require('../controllers/PesananController');
const isAuthenticated = require('../middleware/checkAuth');

const router = Router();


router.get('/', isAuthenticated, PesananController.getAllPesanan);
router.post('/', isAuthenticated, PesananController.addPesanan);
router.get('/:id', isAuthenticated, PesananController.getPesananById);
router.get('/:id/pelanggan', isAuthenticated, PesananController.getPesananOfPelanggan);
router.put('/:id', isAuthenticated, PesananController.updatePesanan);
router.delete('/:id',isAuthenticated, PesananController.deletePesanan);
module.exports = router;