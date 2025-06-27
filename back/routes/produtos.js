const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, ProdutoController.listar);
router.post('/', authMiddleware, ProdutoController.criar);
router.get('/:id', authMiddleware, ProdutoController.detalhar);
router.put('/:id', authMiddleware, ProdutoController.atualizar);
router.delete('/:id', authMiddleware, ProdutoController.remover);

module.exports = router;