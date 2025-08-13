// Dados simulados (em projeto real, viria do banco de dados)
let campanhas = [
    { id: 1, titulo: 'Campanha de adoção responsável', descricao: 'Evento de adoção no parque municipal' },
    { id: 2, titulo: 'Vacinação gratuita', descricao: 'Mutirão de vacinação contra raiva e leptospirose' }
];

// Listar campanhas
function listarCampanhas(req, res) {
    res.status(200).json(campanhas);
}

// Criar nova campanha
function criarCampanha(req, res) {
    const { titulo, descricao } = req.body;
    const novaCampanha = {
        id: campanhas.length + 1,
        titulo,
        descricao
    };
    campanhas.push(novaCampanha);
    res.status(201).json({ mensagem: 'Campanha criada com sucesso!', campanha: novaCampanha });
}

module.exports = { listarCampanhas, criarCampanha };