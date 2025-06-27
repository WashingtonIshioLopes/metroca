const Produto = require('../models/Produto');

exports.criar = async (req, res) => {
  const produto = await Produto.create({ ...req.body, usuarioId: req.userId });
  res.status(201).json(produto);
};

exports.listar = async (req, res) => {
  const { categoria, compatibilidade } = req.query;
  const filtro = {};
  if (categoria) filtro.categoria = categoria;
  // Lógica de compatibilidade ficaria aqui
  const produtos = await Produto.find(filtro).populate('usuarioId');
  res.json(produtos);
};

exports.detalhar = async (req, res) => {
  const produto = await Produto.findById(req.params.id).populate('usuarioId');
  res.json(produto);
};

exports.atualizar = async (req, res) => {
  const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(produto);
};

exports.remover = async (req, res) => {
  await Produto.findByIdAndDelete(req.params.id);
  res.status(204).send();
};