// Dados mockados sobre campanhas contra o racismo
let campanhas = [
  { id: 1, nome: "Educação nas Escolas", descricao: "Promover palestras e materiais educativos", estado: "SP" },
  { id: 2, nome: "Trabalho Justo", descricao: "Campanha para igualdade no ambiente corporativo", estado: "RJ" },
  { id: 3, nome: "Respeito nas Universidades", descricao: "Projeto contra racismo em instituições de ensino", estado: "MG" },
  { id: 4, nome: "Cultura e Diversidade", descricao: "Incentivar espaços culturais inclusivos e representativos", estado: "BA" },
  { id: 5, nome: "Esporte sem Racismo", descricao: "Campanha de conscientização em clubes e escolas de esporte", estado: "PR" },
  { id: 6, nome: "Mídia Consciente", descricao: "Projeto para maior representatividade racial na TV e internet", estado: "DF" }
];


// Listar campanhas
const listarCampanhas = (req, res) => {
  res.status(200).json({
    sucesso: true,
    total: campanhas.length,
    campanhas
  });
};

// Criar nova campanha
const criarCampanha = (req, res) => {
  const { nome, descricao, estado } = req.body;
  const novaCampanha = {
    id: campanhas.length + 1,
    nome,
    descricao,
    estado,
    data: new Date().toLocaleString()
  };
  campanhas.push(novaCampanha);
  res.status(201).json({
    sucesso: true,
    mensagem: "Campanha criada com sucesso!",
    campanha: novaCampanha
  });
};

module.exports = { listarCampanhas, criarCampanha };
