import { Router } from 'express';
const router = Router();
import { listarDenuncias, criarDenuncia } from '../controllers/RacismoController.js';

import verificarDenuncia from '../middlewares/verificarDenuncia.js';

// Listar todas as denúncias de racismo
router.get('/listar-denuncias', listarDenuncias);

// Criar nova denúncia de racismo
router.post('/criar-denuncia', verificarDenuncia, criarDenuncia);

export default router;