
const CampanhaAntirracismo = require("../models/modelCampanhaAntirracismo"); 

// Array para simular um "banco de dados" temporário
let denuncias = [];
// Função para listar todas as denúncias
const listarDenuncias = (req, res) => {
    res.status(200).json({
        sucesso: true,
        total: denuncias.length,
        denuncias
    });
};
// Função para criar uma nova denúncia
const criarDenuncia = (req, res) => {
    const { nome, descricao } = req.body;
    const novaDenuncia = {
        id: denuncias.length + 1,
        nome,
        descricao,
        data: new Date().toLocaleString()
    };
    denuncias.push(novaDenuncia);
    res.status(201).json({
        sucesso: true,
        mensagem: "Denúncia registrada com sucesso. Juntos contra o racismo!",
        denuncia: novaDenuncia
    });
};
export default {
    listarDenuncias,
    criarDenuncia
};