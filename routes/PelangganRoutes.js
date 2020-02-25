const { Router } = require('express');
const PelangganController =require('../controllers/PelangganController');
const isAuthenticated = require('../middleware/checkAuth');

const router = Router();

//route without token
router.get('/', PelangganController.getAllPelanggan);
router.post('/', PelangganController.addPelanggan);
router.get('/:id', PelangganController.getPelangganById);
router.put('/:id', PelangganController.updatePelanggan);
router.delete('/:id', PelangganController.deletePelanggan);

//route with token to authorization
router.get('/', isAuthenticated, PelangganController.getAllPelanggan);
router.post('/', isAuthenticated, PelangganController.addPelanggan);
router.get('/:id', isAuthenticated, PelangganController.getPelangganById);
router.put('/:id', isAuthenticated, PelangganController.updatePelanggan);
router.delete('/:id', isAuthenticated, PelangganController.deletePelanggan);

module.exports = router;