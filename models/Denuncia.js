let denuncias = [
  { id: 1, titulo: "Discriminação no trabalho", descricao: "Tratamento desigual no ambiente corporativo" },
  { id: 2, titulo: "Racismo em escola", descricao: "Ofensas raciais entre estudantes" }
];

class DenunciaModel {
  static listar() {
    return denuncias;
  }

  static buscarPorId(id) {
    return denuncias.find(d => d.id == id);
  }

  static criar(dados) {
    const nova = { id: denuncias.length + 1, ...dados };
    denuncias.push(nova);
    return nova;
  }

  static deletar(id) {
    denuncias = denuncias.filter(d => d.id != id);
    return denuncias;
  }
}

module.exports = DenunciaModel;