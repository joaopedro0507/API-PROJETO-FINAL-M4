const express = require('express');
const router = express.Router();
const DenunciaController = require('../controllers/denunciaController');

// Rotas CRUD
router.get('/', DenunciaController.listar);
router.get('/:id', DenunciaController.buscarPorId);
router.post('/', DenunciaController.criar);
router.delete('/:id', DenunciaController.deletar);

module.exports = router;
