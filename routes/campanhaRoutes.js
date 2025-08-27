const express = require('express');
const router = express.Router();
const { listarDenuncias, criarDenuncia } = require('../controllers/RacismoController.js');
const verificarDenuncia = require('../middlewares/verificarDenuncia.js');

// Listar todas as denúncias de racismo
router.get('/listar-denuncias', listarDenuncias);

// Criar nova denúncia de racismo
router.post('/criar-denuncia', verificarDenuncia, criarDenuncia);

module.exports = router;
