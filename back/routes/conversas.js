const express = require('express');
const router = express.Router();
const ConversaController = require('../controllers/ConversaController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, ConversaController.criarConversa);
router.get('/', authMiddleware, ConversaController.listarConversas);
router.get('/:id', authMiddleware, ConversaController.listarMensagens);
router.post('/:id/mensagens', authMiddleware, ConversaController.enviarMensagem);

module.exports = router;