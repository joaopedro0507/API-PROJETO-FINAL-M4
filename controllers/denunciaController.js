const DenunciaModel = require('../models/denunciaModel');

class DenunciaController {
  static listar(req, res) {
    res.json(DenunciaModel.listar());
  }

  static buscarPorId(req, res) {
    const denuncia = DenunciaModel.buscarPorId(req.params.id);
    if (!denuncia) return res.status(404).send("Denúncia não encontrada");
    res.json(denuncia);
  }

  static criar(req, res) {
    const nova = DenunciaModel.criar(req.body);
    res.status(201).json(nova);
  }

  static deletar(req, res) {
    DenunciaModel.deletar(req.params.id);
    res.send("Denúncia removida com sucesso");
  }
}

module.exports = DenunciaController;