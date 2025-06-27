const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const senhaHash = await bcrypt.hash(senha, 10);
    const user = await Usuario.create({ nome, email, senhaHash });
    res.status(201).json({ id: user._id, nome: user.nome, email: user.email });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const user = await Usuario.findOne({ email });
    if (!user || !await bcrypt.compare(senha, user.senhaHash)) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    const token = jwt.sign({ id: user._id }, 'secreto', { expiresIn: '7d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.me = async (req, res) => {
  const user = await Usuario.findById(req.userId).select('-senhaHash');
  res.json(user);
};