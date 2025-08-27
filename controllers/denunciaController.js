const DenunciaModel = require('../models/denuncia.js');

class DenunciaController {
  static listar(req, res) {
    res.json(_listar());
  }

  static buscarPorId(req, res) {
    const denuncia = _buscarPorId(req.params.id);
    if (!denuncia) return res.status(404).send("Denúncia não encontrada");
    res.json(denuncia);
  }

  static criar(req, res) {
    const nova = _criar(req.body);
    res.status(201).json(nova);
  }

  static deletar(req, res) {
    _deletar(req.params.id);
    res.send("Denúncia removida com sucesso");
  }
}

module.exports = DenunciaController;