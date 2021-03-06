const { Router } = require('express');
const PelangganController =require('../controllers/PelangganController');
const isAuthenticated = require('../middleware/checkAuth');

const router = Router();

//route without token
router.get('/', PelangganController.getAllPelanggan);
router.get('/:id', PelangganController.getPelangganById);


//route with token to authorization
router.get('/auth/all', isAuthenticated, PelangganController.getAllPelanggan);
router.post('/auth', isAuthenticated, PelangganController.addPelanggan);
router.get('/auth/:id', isAuthenticated, PelangganController.getPelangganById);
router.put('/auth/:id', isAuthenticated, PelangganController.updatePelanggan);
router.delete('/auth/:id', isAuthenticated, PelangganController.deletePelanggan);

module.exports = router;