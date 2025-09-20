const express = require("express");
const router = express.Router();
const { listarDenuncias, buscarDenuncia, criarDenuncia, deletarDenuncia } = require("../controllers/denunciaController");

// Rotas de denúncias
router.get("/", listarDenuncias);
router.get("/:id", buscarDenuncia);
router.post("/", criarDenuncia);
router.delete("/:id", deletarDenuncia);

module.exports = router;
