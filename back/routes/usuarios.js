const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const authMiddleware = require('../middleware/auth');

router.put('/:id', authMiddleware, UsuarioController.atualizarPerfil);
router.put('/:id/disponibilidade', authMiddleware, UsuarioController.atualizarDisponibilidade);

module.exports = router;