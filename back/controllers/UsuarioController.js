const Usuario = require('../models/Usuario');

exports.atualizarPerfil = async (req, res) => {
  const updates = req.body;
  const user = await Usuario.findByIdAndUpdate(req.userId, updates, { new: true }).select('-senhaHash');
  res.json(user);
};

exports.atualizarDisponibilidade = async (req, res) => {
  const { linhas, estacoes, diasSemana, horarios } = req.body;
  const user = await Usuario.findByIdAndUpdate(req.userId, { linhas, estacoes, diasSemana, horarios }, { new: true });
  res.json(user);
};