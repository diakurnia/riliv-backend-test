const { Router } = require('express');
const PelangganController =require('../controllers/PelangganController');
const isAuthenticated = require('../middleware/checkAuth');

const router = Router();


router.get('/', isAuthenticated, PelangganController.getAllPelanggan);
router.post('/', isAuthenticated, PelangganController.addPelanggan);
router.get('/:id', isAuthenticated, PelangganController.getPelangganById);
router.put('/:id', isAuthenticated, PelangganController.updatePelanggan);
router.delete('/:id', isAuthenticated, PelangganController.deletePelanggan);

module.exports = router;