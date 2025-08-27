import { Router } from 'express';
const router = Router();
import { listar, buscarPorId, criar, deletar } from '../controllers/denunciaController';

// Rotas CRUD
router.get('/', listar);
router.get('/:id', buscarPorId);
router.post('/', criar);
router.delete('/:id', deletar);

export default router;