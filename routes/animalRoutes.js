const express = require('express');
const router = express.Router();
const { listarCampanhas, criarCampanha } = require('../controllers/animalController.js');
const verificarCampanha = require('../middlewares/verificarCampanha.js');

router.get('/listar-campanhas', listarCampanhas);

router.post('/criar-campanha', verificarCampanha, criarCampanha);

module.exports = router;
