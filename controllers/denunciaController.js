// Dados mockados sobre denúncias de racismo por estado
let denuncias = [
  { id: 1, estado: "SP", descricao: "Discriminação em entrevista de emprego" },
  { id: 2, estado: "RJ", descricao: "Ofensas raciais em transporte público" },
  { id: 3, estado: "MG", descricao: "Racismo em ambiente escolar" }
];

// Listar todas as denúncias
const listarDenuncias = (req, res) => {
  res.status(200).json({
    sucesso: true,
    total: denuncias.length,
    denuncias
  });
};

// Buscar denúncia por ID
const buscarDenuncia = (req, res) => {
  const { id } = req.params;
  const denuncia = denuncias.find(d => d.id == id);

  if (!denuncia) {
    return res.status(404).json({ sucesso: false, mensagem: "Denúncia não encontrada" });
  }

  res.json({ sucesso: true, denuncia });
};

// Criar nova denúncia
const criarDenuncia = (req, res) => {
  const { estado, descricao } = req.body;
  const novaDenuncia = {
    id: denuncias.length + 1,
    estado,
    descricao,
    data: new Date().toLocaleString()
  };
  denuncias.push(novaDenuncia);
  res.status(201).json({
    sucesso: true,
    mensagem: "Denúncia registrada com sucesso!",
    denuncia: novaDenuncia
  });
};

// Deletar denúncia
const deletarDenuncia = (req, res) => {
  const { id } = req.params;
  denuncias = denuncias.filter(d => d.id != id);

  res.json({ sucesso: true, mensagem: "Denúncia removida com sucesso" });
};

module.exports = { listarDenuncias, buscarDenuncia, criarDenuncia, deletarDenuncia };
