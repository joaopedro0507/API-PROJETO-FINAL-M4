const express = require("express");
const router = express.Router();
const { listarCampanhas, criarCampanha } = require("../controllers/campanhaController");

// Rotas de campanhas
router.get("/", listarCampanhas);
router.post("/", criarCampanha);

module.exports = router;
